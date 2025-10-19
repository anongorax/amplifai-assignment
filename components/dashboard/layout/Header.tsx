'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Search, Bot, ChevronDown, PanelLeft, Sparkles, Box, Menu } from 'lucide-react';
import { NotificationBell } from '../ui/NotificationBell';

interface HeaderProps {
    onMenuClick: () => void;
}

/**
 * Dashboard Header Component
 * Contains title, fiscal year selector, search, AI chat, and user profile
 * Responsive: shows menu button on mobile
 */
export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
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
        <header className="bg-white shadow-sm p-3 sm:p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-3">
                {/* Mobile menu button */}
                <button
                    onClick={onMenuClick}
                    className="md:hidden text-gray-400 hover:text-gray-600"
                >
                    <Menu size={24} />
                </button>

                <PanelLeft className='text-gray-400 hidden md:block' size={20} />
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">{getPageTitle()}</h1>
                {isDashboard && (
                    <select className="hidden sm:block ml-2 md:ml-4 p-2 border rounded-md bg-gray-50 text-xs md:text-sm font-medium text-gray-700">
                        <option>FY (2024-2025)</option>
                        <option>FY (2023-2024)</option>
                    </select>
                )}
            </div>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="hidden lg:flex items-center space-x-1">
                    <Box size={24} fill='#e6ab77' />
                    <div className="text-xs md:text-sm font-semibold text-gray-800 cursor-pointer">Quben Infra</div>
                </div>
                <div className='bg-gray-200 py-1.5 px-2 sm:py-2 sm:px-3 rounded-full'>
                    <NotificationBell
                        fill='black'
                        hasNotification={true}
                        size={20}
                        className="text-gray-700 cursor-pointer"
                    />
                </div>

                <button
                    className="hidden sm:flex items-center space-x-2 bg-gradient-to-l from-[#fff] to-[#e3b58d] text-black px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-blue-100 cursor-pointer">
                    <Sparkles color='#e6ab77' fill='#e6ab77' size={16} />
                    <span className='font-bold'>AI Chat</span>
                </button>
            </div>
        </header>
    );

};
