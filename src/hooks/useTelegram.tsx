import { TelegramUser } from '@/types';
import { create } from 'zustand';

interface TelegramStore {
    tg: null,
    tgData: null,
    user: TelegramUser | null,
    setTg: (tg: any) => void;
    removeTg: () => void;
    removeUserId: () => void;
}

export const useTelegram = create<TelegramStore>((set) => ({
    tg: null,
    user: null,
    tgData: null,
    setTg: (tg: any) => set(() => {
        return {
            tg: tg,
            tgData: tg?.initData,
            user: tg?.initDataUnsafe?.user
        }
    }),
    removeTg: () => set({ tg: null }),
    removeUserId: () => set({ user: null }),
}));
