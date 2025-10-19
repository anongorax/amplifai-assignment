'use client';

import React from 'react';
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
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 flex flex-col ml-20">
                <Header />

                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
