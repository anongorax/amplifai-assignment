/**
 * Dashboard Mock Data and Constants
 * Centralized data source for dashboard components
 */

import { RevenueChartData, MarginChartData, CompanyData, InsightItem } from '@/types/dashboard';

export const revenueProfitData: RevenueChartData[] = [
    { name: 'Jul 24', Revenue: 88, 'Profit Trend': 55 },
    { name: 'Aug 24', Revenue: 82, 'Profit Trend': 60 },
    { name: 'Sep 24', Revenue: 90, 'Profit Trend': 58 },
    { name: 'Oct 24', Revenue: 85, 'Profit Trend': 52 },
    { name: 'Nov 24', Revenue: 80, 'Profit Trend': 50 },
    { name: 'Dec 24', Revenue: 88, 'Profit Trend': 53 },
    { name: 'Jan 25', Revenue: 81.6, 'Profit Trend': 48 },
    { name: 'Feb 25', Revenue: 90, 'Profit Trend': 55 },
    { name: 'Mar 25', Revenue: 82, 'Profit Trend': 57 },
    { name: 'Apr 25', Revenue: 80, 'Profit Trend': 50 },
    { name: 'May 25', Revenue: 85, 'Profit Trend': 52 },
    { name: 'Jun 25', Revenue: 92, 'Profit Trend': 60 },
];

export const marginData: MarginChartData[] = [
    { name: 'Jan', Revenue: 85.6, 'Operating Expense': 71.2, COGS: 78.3 },
    { name: 'Feb', Revenue: 88, 'Operating Expense': 72, COGS: 79 },
    { name: 'Mar', Revenue: 82, 'Operating Expense': 68, COGS: 75 },
    { name: 'Apr', Revenue: 90, 'Operating Expense': 75, COGS: 82 },
    { name: 'May', Revenue: 85, 'Operating Expense': 70, COGS: 77 },
    { name: 'Jun', Revenue: 92, 'Operating Expense': 78, COGS: 85 },
];

export const performanceData: CompanyData[] = [
    {
        name: 'NextGen Software Ltd.',
        logo: 'N',
        revenue: '€68.3M',
        netProfit: '€8.1M',
        netProfitChange: 0,
        ebitda: '€26.5M',
        ebitdaChange: 26.5,
        cashFlow: '€6.8M',
        wcCycle: 52
    },
    {
        name: 'Global Tech Solutions',
        logo: 'G',
        revenue: '€62.6M',
        netProfit: '€6.3M',
        netProfitChange: 0,
        ebitda: '€19.3M',
        ebitdaChange: 19.3,
        cashFlow: '€4.5M',
        wcCycle: 76
    },
    {
        name: 'Innovative Tech Solutions',
        logo: 'I',
        revenue: '€54.6M',
        netProfit: '€5.3M',
        netProfitChange: 0,
        ebitda: '€18.5M',
        ebitdaChange: 18.5,
        cashFlow: '€3.8M',
        wcCycle: 45
    },
    {
        name: 'Creative Design Group',
        logo: 'C',
        revenue: '€36.5M',
        netProfit: '€4.1M',
        netProfitChange: 0,
        ebitda: '€0.9M',
        ebitdaChange: -0.9,
        cashFlow: '€2.3M',
        wcCycle: 88
    },
    {
        name: 'Digital Dynamics Inc.',
        logo: 'D',
        revenue: '€30.2M',
        netProfit: '€3.9M',
        netProfitChange: 0,
        ebitda: '€3.9M',
        ebitdaChange: 3.9,
        cashFlow: '€1.9M',
        wcCycle: 25
    },
    {
        name: 'Helix Digital Innovations',
        logo: 'H',
        revenue: '€22.3M',
        netProfit: '€0.3M',
        netProfitChange: 0,
        ebitda: '€1.5M',
        ebitdaChange: -1.5,
        cashFlow: '€0.8M',
        wcCycle: 36
    },
];

export const insightsData: InsightItem[] = [
    {
        id: '1',
        type: 'variance',
        title: 'Monthly Variance Summaries',
        description: 'Helix Digital Innovations reported an 8% decline in profit this month, primarily driven by increased logistics expenses.',
        icon: 'trending',
    },
    {
        id: '2',
        type: 'action',
        title: 'Recommended Actions',
        description: 'Reduce payroll costs in Crestview Technologies by 12% to improve efficiency.',
        icon: 'target',
    },
    {
        id: '3',
        type: 'trend',
        title: 'Market Trends',
        description: 'Quantum Innovations LLC has seen a 15% increase in customer demand, attributed to the launch of their new product line.',
        icon: 'lightbulb',
    },
    {
        id: '4',
        type: 'projection',
        title: 'Future Projections',
        description: 'Analysts predict a 10% growth in revenue for Helix Digital Innovations next quarter, as new partnerships are expected to enhance market reach.',
        icon: 'chart',
    },
];

export const kpiData = [
    {
        title: 'Consolidated Revenue',
        value: '€24.5B',
        change: '+12.5%',
        isPositive: true,
    },
    {
        title: 'Net Profit',
        value: '€40.5M',
        change: '-8.3%',
        isPositive: true,
    },
    {
        title: 'EBITDA Margin',
        value: '14.6%',
        change: '-3.6%',
        isPositive: false,
    },
    {
        title: 'Working Capital',
        value: '€25.7M',
        change: '-3.6%',
        isPositive: false,
    },
];
