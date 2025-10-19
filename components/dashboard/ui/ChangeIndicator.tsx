'use client';

import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { ChangeIndicatorProps } from '@/types/dashboard';

/**
 * Change Indicator Component
 * Displays percentage change with up/down arrow indicator
 */
export const ChangeIndicator: React.FC<ChangeIndicatorProps> = ({ value }) => (
    <span
        className={`flex items-center text-xs font-medium ${value >= 0 ? 'text-green-600' : 'text-red-600'
            }`}
    >
        {value >= 0 ? (
            <TrendingUp size={12} className="mr-1" />
        ) : (
            <TrendingDown size={12} className="mr-1" />
        )}
        {Math.abs(value)}%
    </span>
);
