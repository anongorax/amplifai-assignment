'use client';

import React, { useState } from 'react';
import { Sidebar, Header } from '@/components/dashboard/layout';

/**
 * Dashboard Layout
 * Common layout for all dashboard pages
 * Includes Sidebar and Header components
 */
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col md:ml-20">
                <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

                <main className="flex-1 p-3 sm:p-4 md:p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
