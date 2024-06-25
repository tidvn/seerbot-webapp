"use client"
import BottomTab from '@/components/app/layout/bottom-tab';
import Header from '@/components/app/layout/header';
import React, { useEffect, useState } from 'react';
import { useTelegram } from '@/hooks/useTelegram';
import { checkHash } from '@/services';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils';
export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { setTg } = useTelegram();
    useEffect(() => {
        async function initTg() {
            if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
                const response = await checkHash(window.Telegram.WebApp.initData);
                if (response.statusCode === 200) {
                    setTg(window.Telegram.WebApp);
                    setIsLoading(false);
                }
            } else {
                setTimeout(initTg, 500);
            }
        }
        initTg();
    }, []);
    return (
        <>
            {isLoading ? (
                <div className="grid h-screen place-content-center px-4" >
                    <Loader2
                        className={cn('my-28 h-16 w-16 text-primary/60 animate-spin')}
                    />
                </div>
            ) : (
                <>
                    <Header />
                    <div className="flex h-screen">
                        <main className="flex-1">
                            <div className="pt-16 pb-24 px-4 md:px-8">{children}</div>
                        </main>
                    </div>
                    <BottomTab />
                </>
            )}
        </>
    );
}
