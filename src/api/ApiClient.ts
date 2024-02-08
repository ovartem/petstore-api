import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {BaseConfig} from "../BaseConfig";
import {AbstractApiClient} from "./AbstractApiClient";

export class ApiClient extends AbstractApiClient {
    readonly instance: AxiosInstance;
    constructor () {
        super();
        this.instance = axios.create({baseURL: BaseConfig.baseUrl});
    }

    protected async processor<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.instance.request(config);
    }
}
