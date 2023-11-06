import LoginStore from "./LoginStore";

export interface IRootStore {
    loginStore: LoginStore
}

export class RootStore implements IRootStore {
    loginStore: LoginStore;

    constructor() {
        this.loginStore = new LoginStore(this);
    }

}
