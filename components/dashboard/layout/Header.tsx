'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Search, Bot, ChevronDown, PanelLeft, Sparkles, Box } from 'lucide-react';
import { NotificationBell } from '../ui/NotificationBell';

/**
 * Dashboard Header Component
 * Contains title, fiscal year selector, search, AI chat, and user profile
 */
export const Header: React.FC = () => {
    const pathname = usePathname();

    // Determine page title based on current route
    const isDashboard = pathname === '/dashboard';
    const getPageTitle = () => {
        if (pathname === '/dashboard/companylist') {
            return 'List of Companies';
        }
        return 'Dashboard';
    };

    return (
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
            <div className="flex items-center">
                <PanelLeft className='text-gray-400 mr-3' />
                <h1 className="text-2xl font-semibold text-gray-800">{getPageTitle()}</h1>
                {isDashboard && (
                    <select className="ml-4 p-2 border rounded-md bg-gray-50 text-sm font-medium text-gray-700">
                        <option>FY (2024-2025)</option>
                        <option>FY (2023-2024)</option>
                    </select>
                )}
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                    <Box size={28} fill='#e6ab77' />
                    <div className="text-sm font-semibold text-gray-800 cursor-pointer">Quben Infra</div>
                </div>
                <div className='bg-gray-200 py-2 px-3 rounded-full'>
                    <NotificationBell
                        fill='black'
                        hasNotification={true}
                        size={24}
                        className="text-gray-700 cursor-pointer"
                    />
                </div>

                <button
                    className="flex items-center space-x-2 bg-gradient-to-l from-[#fff] to-[#e3b58d] text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 cursor-pointer">
                    <Sparkles color='#e6ab77' fill='#e6ab77' />
                    <span className='font-bold'>AI Chat</span>
                </button>
            </div>
        </header>
    );

};
