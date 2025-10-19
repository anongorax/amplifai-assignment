'use client';

import React from 'react';
import { TrendingUp, Target, Lightbulb, BarChart3, MoveDiagonal, Sparkles, Diamond } from 'lucide-react';
import { InsightItem } from '@/types/dashboard';

type InsightsProps = {
    data: InsightItem[];
};

/**
 * Insights Section
 * Displays AI-generated insights and recommendations
 */
export const Insights: React.FC<InsightsProps> = ({ data }) => (
    <div className="bg-gradient-to-tl from-[#FFF] to-[#f5e6da] p-6 rounded-lg shadow-sm">
        <div className='flex items-center mb-4'>
            <Sparkles color='#e6ab77' fill='#e6ab77' />
            <h3 className="text-lg font-semibold text-gray-800 ml-1">Insights</h3>
            <MoveDiagonal size={18} className="text-blue-300 ml-auto" />
        </div>
        <div className="space-y-4">
            {data.map((insight) => (
                <div key={insight.id}>
                    <h4 className="flex items-center text-sm font-semibold text-gray-800">
                        <span className="mr-2"><Diamond size={16} color='#e6ab77' fontWeight={700} /></span>
                        {insight.title}
                    </h4>
                    <p
                        className="text-sm text-gray-600 mt-1"
                        dangerouslySetInnerHTML={{
                            __html: insight.description.replace(
                                /\b(Helix Digital Innovations|Crestview Technologies|Quantum Innovations LLC)\b/g,
                                '<span class="text-[#e6ab77] font-bold rounded px-1">$1</span>'
                            )
                        }}
                    />
                </div>
            ))}
        </div>
    </div>
);
