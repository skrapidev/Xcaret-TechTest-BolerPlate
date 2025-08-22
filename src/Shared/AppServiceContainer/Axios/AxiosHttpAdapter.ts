import 'reflect-metadata';
import { IHttpAdapter } from './IHttpAdapter';
import { injectable } from 'inversify';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

@injectable()
export class AxiosHttpAdapter implements IHttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(
  ) {
    axios.defaults.baseURL = `${process.env.BASE_URL_ENDPOINTS}${process.env.BASE_PATH}`;
    this.axiosInstance = axios.create();
    this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("authToken")}`;
    //HANDLE THE SESSION ACTIVE
    this.axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (this.haveAxiosErrorAResponse(error)) {
          const axiosError = error as AxiosError;
          if ([401, 419].includes(axiosError!.response!.status))
            window.location.href = process.env.URL_LOGIN_REDIRECT!;
        }
        return Promise.reject(error);
      }
    );
  }

  async get<T = any>(url: string, config?: any): Promise<T> {
    
    if (config) {
      this.axiosInstance.defaults.headers.get = { ...config };
    }

    const response = await this.axiosInstance.get<T>(url);

    return response.data;
  }

  async post<T = any>(
    url: string,
    payload: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, payload, config);

    return response.data;
  }

  async put<T = any>(
    url: string,
    payload: any,
    config?: AxiosRequestConfig
  ): Promise<T> {

    const response = await this.axiosInstance.put<T>(url, payload, config);

    return response.data;
  }

  async delete<T = any>(url: string, config?: any): Promise<T> {

    const response = await this.axiosInstance.delete<T>(url, { data: config });

    return response.data;
  }

  haveAxiosErrorAResponse(obj: any): obj is AxiosError {
    return 'response' in obj;
  }
}
