import { action, computed, makeObservable, observable } from "mobx";
import { IProducts } from "./ProductStore";
import { IRootStore } from "./RootStore";
import { filter } from "lodash";
export interface ICart {
  products?: IProducts[];
}

export class CartStore {
  cart: ICart = { products: [] };
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
        cart: observable,
        addProductInCart: action,
        removeProductInCart: action,
        getCart: computed,
        getTotalProduct: computed
    });
    this.rootStore = rootStore;
  }

  addProductInCart(product: IProducts) {
    this.cart.products?.push(product);
  }

  removeProductInCart(product: IProducts) {
    const products = filter(
      this.cart.products,
      (prod) => prod.id !== product.id
    );
    this.cart.products = products || [];
  }

  get getCart() {
    return this.cart.products || [];
  }

  get getTotalProduct() {
    return this.cart.products?.length || 0;
  }
}
