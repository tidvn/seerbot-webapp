"use client"
import { API_ACCOUNT } from "@/constants/api.constants";
import { ApiResponseInterface } from "@/models/app.model";
import { AxiosBase } from "../base";

const apiClient = new AxiosBase(API_ACCOUNT);

const getWalletInformation = async (tgData: string ): Promise<ApiResponseInterface> => {
    return await apiClient.get(`/wallet`, {
        headers:
        {
            TelegramData: tgData,
        },
    })
   
};

export {
    getWalletInformation
}