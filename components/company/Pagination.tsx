'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage?: number;
    onPageChange: (page: number) => void;
    onPrevious: () => void;
    onNext: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage = 10,
    onPageChange,
    onPrevious,
    onNext,
}) => {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            }
        }

        return pages;
    };

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center p-3 sm:p-4 border-b bg-gray-50 gap-3 sm:gap-0">
            <span className="text-xs sm:text-sm text-black order-2 sm:order-1">{startItem}-{endItem} of {totalItems}</span>
            <div className="flex items-center space-x-1 sm:space-x-2 order-1 sm:order-2">
                <button
                    onClick={onPrevious}
                    disabled={currentPage === 1}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                    <ChevronLeft className="inline-block" size={16} />
                    <span className="hidden sm:inline ml-1">Previous</span>
                </button>

                {getPageNumbers().map((page, index) =>
                    page === '...' ? (
                        <span key={`ellipsis-${index}`} className="px-1 sm:px-2 text-gray-400 text-xs sm:text-sm">
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => onPageChange(page as number)}
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-sm text-xs sm:text-sm font-medium transition-colors ${currentPage === page
                                ? 'bg-blue-500 text-white'
                                : 'hover:bg-gray-200 text-gray-700'
                                }`}
                        >
                            {page}
                        </button>
                    )
                )}

                <button
                    onClick={onNext}
                    disabled={currentPage === totalPages}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                    <span className="hidden sm:inline mr-1">Next</span>
                    <ChevronRight className="inline-block" size={16} />
                </button>
            </div>
        </div>
    );
};
