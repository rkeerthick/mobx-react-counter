import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";

export interface IProuducts {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
export class ProductStore {
  products: IProuducts[] = [];
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      products: observable,
      fetchProducts: action,
      getProducts: computed,
    });
    this.rootStore = rootStore;
  }

  async fetchProducts() {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        this.products = response?.data ?? [];
    } catch (e) {
      console.log(e);
    }
  }

  get getProducts() {
    return this.products;
  }
}
