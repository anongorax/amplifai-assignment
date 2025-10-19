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
        <div className="flex justify-between items-center p-4 border-b bg-gray-50">
            <span />
            <div className="flex items-center space-x-2">
                <span className='text-black'>{startItem}-{endItem} of {totalItems}</span>
                <button
                    onClick={onPrevious}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="inline-block mr-1" />
                    Previous
                </button>

                {getPageNumbers().map((page, index) =>
                    page === '...' ? (
                        <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
                            ...
                        </span>
                    ) : (
                        <button
                            key={page}
                            onClick={() => onPageChange(page as number)}
                            className={`w-8 h-8 rounded-sm text-sm font-medium transition-colors ${currentPage === page
                                ? 'bg-gray-300 text-black'
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
                    className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                    <ChevronRight className="inline-block mr-1" />
                </button>
            </div>
        </div>
    );
};
