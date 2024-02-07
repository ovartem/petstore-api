import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {BaseConfig} from "../BaseConfig";

export class ApiClient {
    readonly instance: AxiosInstance;
    constructor () {
        this.instance = axios.create({baseURL: BaseConfig.baseUrl});
    }

    protected async processor<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.request(config);
    }

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.processor<T>({ ...config, url, method: 'GET' });
    }

    async post<T>(
        url: string,
        data?: unknown,
        config?: AxiosRequestConfig,
    ): Promise<AxiosResponse<T>> {
        return this.processor<T>({
            ...config,
            data,
            url,
            method: 'POST',
        });
    }
}
