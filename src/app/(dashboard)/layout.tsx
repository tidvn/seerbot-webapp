"use client";
import BottomTab from '@/components/app/layout/bottom-tab';
import Header from '@/components/app/layout/header';
import React from 'react';
import useSWR from 'swr';
import { useTelegram } from '@/hooks/useTelegram';
import { checkHash } from '@/services';
import Loading from '@/components/common/Loading';

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    const { setTg } = useTelegram();
    const { error, isLoading } = useSWR(
        typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp.initData : null,
        async () => {
            const response = await checkHash(window.Telegram.WebApp.initData);
            if (response.statusCode === 200) {
                setTg(window.Telegram.WebApp);
                return response;
            } else {
                throw new Error('Failed to fetch');
            }
        }
    );

    if (isLoading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <>
            <Header />
            <div className="flex h-screen">
                <main className="flex-1">
                    <div className="pt-16 pb-24 px-4 md:px-8">{children}</div>
                </main>
            </div>
            <BottomTab />
        </>
    )
};
