import {AxiosInstance, AxiosRequestConfig} from 'axios';
import { GenericResponseType } from '../utils/customTypes';

export abstract class AbstractApiClient<K = AxiosInstance> {
    protected _instance: K;

    protected abstract processor<T>(config: AxiosRequestConfig): Promise<GenericResponseType<T, K>>;

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<GenericResponseType<T, K>> {
        return this.processor<T>({ ...config, url, method: 'GET' });
    }

    async post<T>(
        url: string,
        data?: unknown,
        config?: AxiosRequestConfig,
    ): Promise<GenericResponseType<T, K>> {
        return this.processor<T>({
            ...config,
            data,
            url,
            method: 'POST',
        });
    }
}
