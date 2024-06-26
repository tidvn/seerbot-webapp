"use client"
import { API_AUTH } from "@/constants/api.constants";
import { ApiResponseInterface } from "@/models/app.model";
import { AxiosBase } from "../base";
import { useTelegram } from "@/hooks/useTelegram";

const apiClient = new AxiosBase(API_AUTH);

const getWalletInformation = async (): Promise<ApiResponseInterface> => {
    const { tgData } = useTelegram();
    return await apiClient.get(`/wallet`, { TelegramData: tgData })
};

export {
    getWalletInformation
}