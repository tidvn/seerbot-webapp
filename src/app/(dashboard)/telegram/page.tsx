"use client";
import { useTelegram } from "@/hooks/useTelegram";

export default function Page() {
    const tg = useTelegram();
    return `${JSON.stringify(tg)}`;
}
