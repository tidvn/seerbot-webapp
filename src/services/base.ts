import { BACKEND_URL } from "@/constants/api.constants";
import axios, { AxiosInstance } from "axios";
import { ApiResponseInterface } from "@/models/app.model";

export class AxiosBase {
  private instance: AxiosInstance;

  constructor(path: string) {
    this.instance = axios.create({
      baseURL: BACKEND_URL + path,
      timeout: 30000,
      timeoutErrorMessage: "Time out!",
    });
  }

  async post(route: string, body = {}, header = {}): Promise<ApiResponseInterface> {
    try {
      const response = await this.instance.post(route, body, { headers: header });
      return response.data as ApiResponseInterface;
    } catch (error: any) {
      throw new Error(error.response?.data.message || error.message);
    }
  }

  async get(route: string, header = {}): Promise<ApiResponseInterface> {
    try {
      const response = await this.instance.get(route, { headers: header });
      return response.data as ApiResponseInterface;
    } catch (error: any) {
      throw new Error(error.response?.data.message || error.message);
    }
  }
}
