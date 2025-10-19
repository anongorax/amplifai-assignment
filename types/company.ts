/**
 * Company List Types and Interfaces
 */

export interface Company {
    id: string;
    name: string;
    ceo: string;
    revenue: number;
    profit: number;
    ebitda: number;
    margin: number;
    insights: string[];
}

export interface CompanyListFilters {
    searchTerm: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
