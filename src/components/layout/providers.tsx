'use client';
import React from 'react';
import ThemeProvider from './ThemeToggle/theme-provider';
export default function Providers({
    //   session,
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {/* <SessionProvider session={session}> */}
                {children}
                {/* </SessionProvider> */}
            </ThemeProvider>
        </>
    );
}
