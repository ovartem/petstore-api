import {IPostPet} from "./IPet";

export function petBody () {
    return {
        _body: {} as IPostPet,

        init(name: string = "AQA_PET_" + Date.now()) {
            this._body = {
                id: `${Date.now()}`,
                name,

            };
            return this;
        },
        withStatus(status: string) {
          this._body.status = status;
          return this;
        },
        build(): IPostPet {
            return this._body;
        }
    }
}
