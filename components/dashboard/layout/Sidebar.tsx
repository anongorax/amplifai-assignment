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
    X,
} from 'lucide-react';
import Image from 'next/image';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Sidebar Navigation Component
 * Fixed left sidebar with navigation links
 * Responsive: drawer on mobile, fixed on desktop
 */
export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div className={`
                w-64 md:w-20 bg-gray-900 text-white flex flex-col p-4 space-y-8 fixed h-full z-50 transition-transform duration-300
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                {/* Close button for mobile */}
                <button
                    onClick={onClose}
                    className="md:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    <X size={24} />
                </button>

                <Link href="/dashboard" className='bg-white p-2 rounded-lg mb-4 w-fit'>
                    <Image src="/flowstate.svg" alt="FlowState Logo" width={48} height={48} />
                </Link>
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
                        className="p-3 rounded-full transition-colors"
                        title="Profile"
                    >
                        <User color='purple' size={28} />
                    </Link>
                </div>
            </div>
        </>
    );
};
