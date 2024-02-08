import {PetService} from "../api/services/pet/PetService";
import {ApiClient} from "../api/ApiClient";
import {petBody} from "../api/services/pet/BodyHelper";

test('Add Pet test', async () => {
    const petService = new PetService(new ApiClient());
    const requestBody = petBody().init().build();
    const resp = await petService.addPet(requestBody);
    expect(resp.status).toBe(200);
    console.log(resp.data);
});
