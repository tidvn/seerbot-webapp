'use client';
import React, { useEffect } from 'react';
import ThemeProvider from './ThemeToggle/theme-provider';
import { useTelegram } from '@/hooks/useTelegram';
import axios from 'axios';
export default function Providers({
    children
}: {
    children: React.ReactNode;
}) {
    const { setTg } = useTelegram();
    useEffect(() => {
        function initTg() {
            if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
                const tgData = window.Telegram.WebApp
                axios.post('/api/auth/validate-hash', { hash: window.Telegram.WebApp.initData })
                    .then((response) => {
                        if (response.status === 200) {
                            setTg(tgData)
                        }
                    });

            } else {
                setTimeout(initTg, 500);
            }
        }
        initTg();
    }, []);
    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </ThemeProvider>
        </>
    );
}
