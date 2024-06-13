"use client";
import { useTelegram } from "@/hooks/useTelegram";

export default function page() {
    const tg = useTelegram();
    return `${JSON.stringify(tg)}`;
}
