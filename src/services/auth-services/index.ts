import { API_AUTH } from "@/constants/api.constants";
import { ApiResponseInterface } from "@/models/app.model";
import { AxiosBase } from "../base";

const apiClient = new AxiosBase(API_AUTH);

const checkHash = async (tgHash: string): Promise<ApiResponseInterface> => {
    return await apiClient.get(`/validate-hash?${tgHash}`)
};

export {
    checkHash
}