import { API_ACCOUNT } from "@/constants/api.constants";
import { ApiResponseInterface } from "@/models/app.model";
import { AxiosBase } from "../base";

const apiClient = new AxiosBase(API_ACCOUNT);

const getWalletInformation = async (tgData: string ): Promise<ApiResponseInterface> => {
    console.log(tgData)
    return await apiClient.get(`/wallet`, 
        {
            "telegram-data": tgData,
        },
    )
   
};

export {
    getWalletInformation
}