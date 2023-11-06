import loginStore from "./loginStore";

export interface IRootStore {
    loginStore: loginStore
}

class rootStore implements IRootStore {
    loginStore: loginStore;

    constructor() {
        this.loginStore = new loginStore(this);
    }

}

export default rootStore;