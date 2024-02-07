import {ApiClient} from "../../ApiClient";
import {AxiosResponse} from "axios";
import {IPostPet} from "./IPet";

export class PetService {
    private readonly client: ApiClient;
    private readonly uri = "pet";
    constructor(client: ApiClient) {
        this.client = client;
    }

    async addPet(data: IPostPet): Promise<AxiosResponse<IPostPet>> {
        return this.client.post(`/${this.uri}`, data);
    }
}
