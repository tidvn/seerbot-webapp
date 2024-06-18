'use client';
import React, { useEffect } from 'react';
import { useTelegram } from '@/hooks/useTelegram';
import { isNil } from 'lodash';
import { useRouter } from 'next/navigation';
export default function Providers({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const { user } = useTelegram();
    useEffect(() => {
        if (isNil(user)) {
            router.push('/');
        };
    }, [user]);
    return (
        <>
            {children}
        </>
    );
}
