import axios, { AxiosInstance } from "axios";
import { API_AUTH, BACKEND_URL } from "@/constants/api.constants";
import { ApiResponseInterface } from "@/models/app.model";

const instance: AxiosInstance = axios.create({
    baseURL: BACKEND_URL + API_AUTH,
    timeout: 30000,
    timeoutErrorMessage: "Time out!",
});

async function post(route: string, body = {}, header = {}) {
    try {
        return await instance.post(`${route}`, body, header).then((response) => {
            return response.data as ApiResponseInterface;
        })
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}

async function get(route: string, header = {}) {
    try {
        return await instance.get(`${route}`, header).then((response) => {
            return response.data as ApiResponseInterface;
        })
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}

const checkHash = async (tgHash: string): Promise<ApiResponseInterface> => {
    return await get(`/validate-hash?${tgHash}`)
};

export {
    checkHash
}