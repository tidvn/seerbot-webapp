"use client"
import BottomTab from '@/components/app/layout/bottom-tab';
import Header from '@/components/app/layout/header';
import Sidebar from '@/components/app/layout/sidebar';

import React, { useEffect } from 'react';
import { useTelegram } from '@/hooks/useTelegram';
import { isNil } from 'lodash';
import { useRouter } from 'next/navigation';
export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const { user } = useTelegram();
    useEffect(() => {
        if (isNil(user)) {
            router.push('/');
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    return (
        <>
            <Header />
            <div className="flex h-screen ">
                <Sidebar />
                <main className="flex-1 ">
                    <div className='pt-16 pb-24 px-4 md:px-8'>
                        {children}
                    </div>
                </main >
            </div >
            <BottomTab />
        </>
    );
}
