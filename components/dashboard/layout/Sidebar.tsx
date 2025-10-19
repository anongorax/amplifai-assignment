'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    MailOpen,
    Settings,
    User,
    Database,
} from 'lucide-react';
import Image from 'next/image';

/**
 * Sidebar Navigation Component
 * Fixed left sidebar with navigation links
 */
export const Sidebar: React.FC = () => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className="w-20 bg-gray-900 text-white flex flex-col items-center p-4 space-y-8 fixed h-full">
            <div className='bg-white p-2 rounded-lg mb-4'>
                <Image src="/flowstate.svg" alt="FlowState Logo" width={48} height={48} />
            </div>
            <nav className="flex flex-col space-y-6">
                <Link
                    href="/dashboard"
                    className={`p-3 rounded-lg transition-colors ${isActive('/dashboard')
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                        }`}
                    title="Dashboard"
                >
                    <LayoutDashboard size={20} />
                </Link>
                <Link
                    href="/dashboard/companylist"
                    className={`p-3 rounded-lg transition-colors ${isActive('/dashboard/companylist')
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                        }`}
                    title="Company List"
                >
                    <MailOpen size={20} />
                </Link>
                <Link
                    href="#"
                    className="p-3 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                    title="Database"
                >
                    <Database size={20} />
                </Link>
                <Link
                    href="#"
                    className="p-3 text-gray-400 hover:bg-gray-700 hover:text-white rounded-lg transition-colors"
                    title="Settings"
                >
                    <Settings size={20} />
                </Link>
            </nav>
            <div className="mt-auto">
                <Link
                    href="#"
                    className="p-3  rounded-full transition-colors"
                    title="Profile"
                >
                    <User color='purple' size={28} />
                </Link>
            </div>
        </div>
    );
};
