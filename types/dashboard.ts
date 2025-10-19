/**
 * Dashboard Type Definitions
 * Centralized type definitions for the dashboard module
 */

export type KpiCardProps = {
    title: string;
    value: string;
    change: string;
    isPositive: boolean;
};

export type CompanyData = {
    name: string;
    logo: string;
    revenue: string;
    netProfit: string;
    netProfitChange: number;
    ebitda: string;
    ebitdaChange: number;
    cashFlow: string;
    wcCycle: number;
};

export type ChartDataPoint = {
    name: string;
    [key: string]: string | number;
};

export type RevenueChartData = {
    name: string;
    Revenue: number;
    'Profit Trend': number;
};

export type MarginChartData = {
    name: string;
    Revenue: number;
    'Operating Expense': number;
    COGS: number;
};

export type InsightItem = {
    id: string;
    type: 'variance' | 'action' | 'trend' | 'projection';
    title: string;
    description: string;
    icon: 'trending' | 'target' | 'lightbulb' | 'chart';
};

export type ChangeIndicatorProps = {
    value: number;
};
