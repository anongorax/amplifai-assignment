'use client';

import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import { RevenueChartData } from '@/types/dashboard';
import { ChartSpline, MoveDiagonal } from 'lucide-react';

type RevenueChartProps = {
    data: RevenueChartData[];
};

export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => (
    <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm">
        <div className='flex items-center'>
            <ChartSpline className='text-black mb-3 sm:mb-4 mx-1' size={18} />
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                Revenue & Profit Trend
            </h3>
            <MoveDiagonal size={16} className="text-blue-300 ml-auto" />
        </div>
        <div style={{ width: '100%', height: 250 }} className="sm:h-[300px]">
            <ResponsiveContainer>
                <p className='text-gray-400 ml-3 sm:ml-5 mb-1 text-xs sm:text-sm'> {`{€}`} </p>
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 10, left: -25, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="name"
                        fontSize={10}
                        axisLine={true}
                        tickLine={true}
                        interval="preserveStartEnd"
                    />
                    <YAxis
                        fontSize={10}
                        axisLine={true}
                        tickLine={true}
                        tickFormatter={(value) => `${value}M`}
                    />
                    <Tooltip />
                    <Legend
                        verticalAlign="bottom"
                        height={36}
                        iconType="square"
                        formatter={(value) => <span className='text-gray-400'>{value}</span>}

                    />
                    <Line
                        type="monotone"
                        dataKey="Revenue"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={true}
                        activeDot={{ r: 6 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="Profit Trend"
                        stroke="#f97316"
                        strokeWidth={2}
                        dot={true}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
);
