import { AxiosRequestConfig } from "axios";

export interface IHttpAdapter {
  get<T = any>(url: string, config?: any): Promise<T>;
  post<T = any>(url: string, params: any, config?: AxiosRequestConfig): Promise<T>;
  put<T = any>(url: string, payload?: any, config?: AxiosRequestConfig): Promise<T>;
  delete<T = any>(url: string, payload?: any): Promise<T>;
}
