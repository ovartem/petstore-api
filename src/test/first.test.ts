import {PetService} from "../api/services/pet/PetService";
import {ApiClient} from "../api/ApiClient";
import {petBody} from "../api/services/pet/BodyHelper";

const sum = (a,b) => a-b;

test('adds 1 + 2 to equal 3', async () => {
    const petService = new PetService(new ApiClient());
    const resp = await petService.addPet(petBody().init().build());
    expect(resp.status).toBe(200);
    console.log(resp.data);
});
