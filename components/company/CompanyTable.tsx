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
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header}
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm font-bold text-gray-900">
                                    <Building2 className="inline-block mr-1" />
                                    {company.name}
                                </div>
                            </td>

                            {/* CEO */}
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-purple-300 flex items-center justify-center text-blue-600 font-semibold text-xs mr-2">
                                        {company.ceo.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <span className="text-sm text-gray-500">{company.ceo}</span>
                                </div>
                            </td>

                            {/* Revenue */}
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <ChangeIndicator value={company.revenue} />

                            </td>

                            {/* Profit */}
                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${getMetricColor(company.profit)}`}>
                                {company.profit > 0 ? '+' : ''}€{company.profit}M
                            </td>

                            {/* EBITDA */}
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                €{company.ebitda}M
                            </td>

                            {/* Gross Margin */}
                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${getMetricColor(company.margin)}`}>

                                <ChangeIndicator value={company.margin} />
                            </td>

                            {/* Key Insights */}
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex flex-wrap gap-1">
                                    {company.insights.map((insight) => (
                                        <span
                                            key={insight}
                                            className="px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-full bg-gray-100 text-blue-800"
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
