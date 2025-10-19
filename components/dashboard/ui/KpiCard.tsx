'use client';

import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { KpiCardProps } from '@/types/dashboard';

/**
 * KPI Card Component
 * Displays key performance indicator with value and change percentage
 */
export const KpiCard: React.FC<KpiCardProps> = ({ title, value, change, isPositive }) => (
    <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
            <h3 className="text-xs sm:text-sm font-medium text-gray-500">{title}</h3>
        </div>
        <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 sm:mt-2">{value}</p>
        <div className="flex items-center text-sm mt-1 sm:mt-2">
            <span
                className={`flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${isPositive
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                    }`}
            >
                {isPositive ? (
                    <TrendingUp size={12} className="mr-1" />
                ) : (
                    <TrendingDown size={12} className="mr-1" />
                )}
                {change} {!isPositive && 'YoY'}
            </span>
        </div>
    </div>
);
