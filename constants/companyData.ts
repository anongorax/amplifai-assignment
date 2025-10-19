/**
 * Company List Mock Data
 */

import { Company } from '@/types/company';

export const companiesData: Company[] = [
    {
        id: '1',
        name: 'NextGen Software Ltd.',
        ceo: 'John Smith',
        revenue: -68.3,
        profit: 8.1,
        ebitda: 26.5,
        margin: 38.8,
        insights: ['High Growth', 'Tech Leader'],
    },
    {
        id: '2',
        name: 'Global Tech Solutions',
        ceo: 'Sarah Johnson',
        revenue: 62.6,
        profit: 6.3,
        ebitda: 19.3,
        margin: 30.8,
        insights: ['Stable', 'Expanding'],
    },
    {
        id: '3',
        name: 'Innovative Tech Solutions',
        ceo: 'Michael Chen',
        revenue: -54.6,
        profit: 5.3,
        ebitda: 18.5,
        margin: -33.9,
        insights: ['Innovation', 'R&D Focus'],
    },
    {
        id: '4',
        name: 'Creative Design Group',
        ceo: 'Emily Davis',
        revenue: 36.5,
        profit: -0.9,
        ebitda: 0.9,
        margin: 2.5,
        insights: ['Recovery', 'Restructuring'],
    },
    {
        id: '5',
        name: 'Digital Dynamics Inc.',
        ceo: 'David Wilson',
        revenue: 30.2,
        profit: 3.9,
        ebitda: 3.9,
        margin: -12.9,
        insights: ['Digital First', 'Agile'],
    },
    {
        id: '6',
        name: 'Helix Digital Innovations',
        ceo: 'Lisa Anderson',
        revenue: -22.3,
        profit: -1.5,
        ebitda: 1.5,
        margin: 6.7,
        insights: ['Startup', 'Growth Stage'],
    },
    {
        id: '7',
        name: 'Quantum Innovations LLC',
        ceo: 'Robert Taylor',
        revenue: 45.8,
        profit: 7.2,
        ebitda: 15.6,
        margin: 34.1,
        insights: ['Innovation', 'Patents'],
    },
    {
        id: '8',
        name: 'TechVision Systems',
        ceo: 'Jennifer Martinez',
        revenue: 58.9,
        profit: 9.3,
        ebitda: 22.1,
        margin: -37.5,
        insights: ['Leader', 'Enterprise'],
    },
];

export const tableHeaders = [
    'Company Name',
    'CEO',
    'Revenue',
    'Profit',
    'EBITDA',
    'Gross Margin',
    'Key Insights',
];
