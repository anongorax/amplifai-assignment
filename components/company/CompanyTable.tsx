'use client';

import React from 'react';
import { Company } from '@/types/company';
import { Building2 } from 'lucide-react';
import { ChangeIndicator } from '../dashboard/ui';

interface CompanyTableProps {
    companies: Company[];
    headers: string[];
}

const getMetricColor = (value: number): string => {
    if (value > 30) return 'text-green-600';
    if (value > 0) return 'text-gray-900';
    return 'text-red-600';
};

export const CompanyTable: React.FC<CompanyTableProps> = ({ companies, headers }) => {
    return (
        <div className="overflow-x-auto -mx-3 sm:mx-0">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header}
                                className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {companies.map((company) => (
                        <tr key={company.id} className="hover:bg-gray-50 transition-colors">
                            {/* Company Name */}
                            <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap">
                                <div className="text-xs sm:text-sm font-bold text-gray-900 flex items-center">
                                    <Building2 className="inline-block mr-1" size={14} />
                                    <span className="max-w-[120px] sm:max-w-none truncate">{company.name}</span>
                                </div>
                            </td>

                            {/* CEO */}
                            <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-300 flex items-center justify-center text-blue-600 font-semibold text-xs mr-2">
                                        {company.ceo.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <span className="text-xs sm:text-sm text-gray-500">{company.ceo}</span>
                                </div>
                            </td>

                            {/* Revenue */}
                            <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                                <ChangeIndicator value={company.revenue} />

                            </td>

                            {/* Profit */}
                            <td className={`px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold ${getMetricColor(company.profit)}`}>
                                {company.profit > 0 ? '+' : ''}€{company.profit}M
                            </td>

                            {/* EBITDA */}
                            <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                                €{company.ebitda}M
                            </td>

                            {/* Gross Margin */}
                            <td className={`px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-semibold ${getMetricColor(company.margin)}`}>

                                <ChangeIndicator value={company.margin} />
                            </td>

                            {/* Key Insights */}
                            <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap">
                                <div className="flex flex-wrap gap-1">
                                    {company.insights.map((insight) => (
                                        <span
                                            key={insight}
                                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 inline-flex text-[10px] sm:text-xs leading-4 font-semibold rounded-full bg-gray-100 text-blue-800"
                                        >
                                            {insight}
                                        </span>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
