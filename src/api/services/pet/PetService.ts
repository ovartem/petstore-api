import {AxiosInstance} from "axios";
import {IPostPet} from "./IPet";
import {AbstractApiClient} from "../../AbstractApiClient";
import {GenericResponseType} from "../../../utils/customTypes";

export class PetService<T = AxiosInstance> {
    private readonly client: AbstractApiClient<T>;
    private readonly uri = "pet";
    constructor(client: AbstractApiClient<T>) {
        this.client = client;
    }

    async addPet(data: IPostPet): Promise<GenericResponseType<IPostPet, T>> {
        return this.client.post(`/${this.uri}`, data);
    }
}
