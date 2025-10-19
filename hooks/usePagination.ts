'use client';

import { useState, useMemo, useEffect } from 'react';
import { Company } from '@/types/company';

interface UsePaginationProps {
    data: Company[];
    itemsPerPage?: number;
}

export function usePagination({ data, itemsPerPage = 10 }: UsePaginationProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Reset to page 1 when data changes (e.g., after filtering)
    useEffect(() => {
        setCurrentPage(1);
    }, [data.length]);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    }, [data, currentPage, itemsPerPage]);

    const goToPage = (page: number) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    };

    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const previousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return {
        currentPage,
        totalPages,
        paginatedData,
        goToPage,
        nextPage,
        previousPage,
        totalItems: data.length,
    };
}
