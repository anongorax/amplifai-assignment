'use client';

import React from 'react';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import { MarginChartData } from '@/types/dashboard';
import { MoveDiagonal } from 'lucide-react';

type MarginChartProps = {
    data: MarginChartData[];
};

export const MarginChart: React.FC<MarginChartProps> = ({ data }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className='flex items-center mb-4'>
            <h3 className="text-lg font-semibold text-gray-800">
                Margin Trends (Last 6 Months)
            </h3>
            <MoveDiagonal size={18} className="text-blue-300 ml-auto" />
        </div>

        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <p className='text-gray-400 ml-5 mb-1'> {`{€}`} </p>
                <BarChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="name"
                        fontSize={12}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        fontSize={12}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) => `${value}M`}
                    />
                    <Tooltip />
                    <Legend
                        verticalAlign="bottom"
                        height={36}
                        iconType="square"
                        formatter={(value) => <span className='text-gray-400'>{value}</span>}
                    />
                    <Bar
                        dataKey="Revenue"
                        fill="#3b82f6"
                    // radius={[4, 4, 0, 0]}
                    />
                    <Bar
                        dataKey="Operating Expense"
                        fill="#a78bfa"
                    // radius={[4, 4, 0, 0]}
                    />
                    <Bar
                        dataKey="COGS"
                        fill="#b89f25"
                        radius={[4, 4, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
);
