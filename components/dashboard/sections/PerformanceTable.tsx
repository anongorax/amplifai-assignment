'use client';

import React from 'react';
import { CompanyData } from '@/types/dashboard';
import { ChangeIndicator } from '../ui';
import { LayoutList, MoveDiagonal } from 'lucide-react';

type PerformanceTableProps = {
    data: CompanyData[];
};

/**
 * Entity-wise Performance Table
 * Displays company performance metrics in a table format
 */
export const PerformanceTable: React.FC<PerformanceTableProps> = ({ data }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4 ">
            <LayoutList size={18} className="text-black mr-1" />
            <h3 className="text-lg font-semibold text-gray-800">
                Entity-wise Performance
            </h3>
            <MoveDiagonal size={18} className="text-blue-300 ml-auto" />
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600">
                <thead className="bg-gray-50 text-xs text-gray-700">
                    <tr>
                        <th scope="col" className="px-4 py-3 text-gray-400">Company Name</th>
                        <th scope="col" className="px-4 py-3 text-gray-400">Revenue</th>
                        <th scope="col" className="px-4 py-3 text-gray-400">Net Profit</th>
                        <th scope="col" className="px-4 py-3 text-gray-400">EBITDA</th>
                        <th scope="col" className="px-4 py-3 text-gray-400">Cash Flow(€M)</th>
                        <th scope="col" className="px-4 py-3 text-gray-400">WC Cycle (Days)</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {data.map((company) => (
                        <tr key={company.name} className="bg-white hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-gray-900 flex items-center space-x-3">
                                <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                                    {company.logo}
                                </span>
                                <span>{company.name}</span>
                            </td>
                            <td className="px-4 py-3 font-semibold">{company.revenue}</td>
                            <td className="px-4 py-3 font-semibold">{company.netProfit}</td>
                            <td className="px-4 py-3 font-semibold">
                                <div className="flex items-center space-x-2">
                                    <ChangeIndicator value={company.ebitdaChange} />
                                </div>
                            </td>
                            <td className="px-4 py-3 font-semibold">{company.cashFlow}</td>
                            <td className="px-4 py-3 font-semibold">{company.wcCycle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
