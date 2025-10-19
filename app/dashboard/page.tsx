import React from 'react';

import { KpiCard } from '@/components/dashboard/ui';
import { RevenueChart, MarginChart } from '@/components/dashboard/charts';
import { PerformanceTable, Insights } from '@/components/dashboard/sections';
import {
    kpiData,
    revenueProfitData,
    marginData,
    performanceData,
    insightsData,
} from '@/constants/dashboardData';

/**
 * Dashboard Page
 * Main dashboard view with KPIs, charts, performance table, and insights
 */
export default function Dashboard() {
    return (
        <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {kpiData.map((kpi) => (
                    <KpiCard
                        key={kpi.title}
                        title={kpi.title}
                        value={kpi.value}
                        change={kpi.change}
                        isPositive={kpi.isPositive}
                    />
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
                <div className="lg:col-span-3">
                    <RevenueChart data={revenueProfitData} />
                </div>
                <div className="lg:col-span-2">
                    <MarginChart data={marginData} />
                </div>
            </div>

            {/* Table & Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <PerformanceTable data={performanceData} />
                </div>
                <div className="lg:col-span-2">
                    <Insights data={insightsData} />
                </div>
            </div>
        </>
    );
}

