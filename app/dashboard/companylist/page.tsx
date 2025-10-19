'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { AddCompanyModal } from '@/components/ui/AddCompanyModal';
import { Filter, Download, Plus } from 'lucide-react';
import { SearchInput, Pagination, CompanyTable } from '@/components/company';
import { companiesData, tableHeaders } from '@/constants/companyData';
import { usePagination } from '@/hooks/usePagination';

export default function CompanyListPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [companies, setCompanies] = useState(companiesData);
    const [modalOpen, setModalOpen] = useState(false);

    // Add Company handler
    const handleAddCompany = (company: Omit<typeof companiesData[0], 'id'>) => {
        const newCompany = {
            ...company,
            id: (companies.length + 1).toString(),
        };
        setCompanies([newCompany, ...companies]);
    };

    // Filter companies based on search term
    const filteredCompanies = useMemo(() => {
        if (!searchTerm) return companies;
        const lowerSearch = searchTerm.toLowerCase();
        return companies.filter(
            (company) =>
                company.name.toLowerCase().includes(lowerSearch) ||
                company.ceo.toLowerCase().includes(lowerSearch) ||
                company.insights.some(insight => insight.toLowerCase().includes(lowerSearch))
        );
    }, [searchTerm, companies]);

    const {
        currentPage,
        totalPages,
        paginatedData,
        goToPage,
        nextPage,
        previousPage,
        totalItems,
    } = usePagination({ data: filteredCompanies, itemsPerPage: 3 });

    // Reset to page 1 when search term or companies change
    useEffect(() => {
        goToPage(1);
    }, [searchTerm, companies]);

    return (
        <div>
            <AddCompanyModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={handleAddCompany}
            />
            {/* Top Control Panel */}
            <div className="flex justify-between items-center mb-6">
                {/* Search and Filter */}
                <div className="flex space-x-4">
                    <SearchInput
                        value={searchTerm}
                        onChange={setSearchTerm}
                        placeholder="Search companies..."
                    />
                    <button className="p-2 px-4 border border-blue-400 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                        <Filter size={18} className="text-blue-400" />
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                    <button className="py-2 px-4 border border-blue-400 rounded-lg text-blue-400 hover:bg-blue-50 transition-colors flex items-center gap-2">
                        <Download size={18} />
                        <span>Export</span>
                    </button>
                    <button
                        className="py-2 px-4 rounded-lg text-blue-400 border-blue-400 border transition-colors flex items-center gap-2"
                        onClick={() => setModalOpen(true)}
                    >
                        <Plus size={18} />
                        <span>Add Company</span>
                    </button>
                </div>
            </div>

            {/* Data Table Container */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    itemsPerPage={3}
                    onPageChange={goToPage}
                    onPrevious={previousPage}
                    onNext={nextPage}
                />

                {/* Table */}
                <CompanyTable companies={paginatedData} headers={tableHeaders} />

                {/* Empty State */}
                {filteredCompanies.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No companies found</p>
                        <p className="text-gray-400 text-sm mt-2">Try adjusting your search criteria</p>
                    </div>
                )}
            </div>
        </div>
    );
}
