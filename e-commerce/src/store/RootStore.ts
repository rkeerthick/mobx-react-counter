import { LoginStore } from "./LoginStore";
import { ProductStore } from "./ProductStore";

export interface IRootStore {
    loginStore: LoginStore;
    productStore: ProductStore
}

export class RootStore implements IRootStore {
    loginStore: LoginStore;
    productStore: ProductStore;

  constructor() {
      this.loginStore = new LoginStore(this);
      this.productStore = new ProductStore(this)
  }
}

