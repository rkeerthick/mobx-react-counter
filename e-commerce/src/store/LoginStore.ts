import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";
import { find } from "lodash";
import { APIS } from "../Constants/apis";

export interface IUserDetails {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
}

export interface Name {
  firstname: string;
  lastname: string;
}

export interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface Geolocation {
  lat: string;
  long: string;
}

export class LoginStore {
  loginToken: string = "";
  userDetails: IUserDetails | null = null;
  rootStore: IRootStore;
  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      loginToken: observable,
      userDetails: observable,
      setUser: action,
      getUserToken: computed,
    });
    this.rootStore = rootStore;
  }

  logout() {
    this.loginToken = "";
    this.userDetails = {} as IUserDetails;
  }

  async setUser(userName: string) {
    const userLists = await axios.get(APIS.GET_USERS);
    if (this.getUserToken) {
      console.log(1)
      const user = find(userLists.data, (u) => u.username === userName);
      this.loginToken = this.getUserToken;
      this.userDetails = user;
    }
    console.log(this.userDetails)
  }

  setToken(token: any) {
    this.loginToken = token;
  }

  get getUserToken() {
    return this.loginToken;
  }

  setUserToken(data: string): void {
    this.loginToken = data;
  }

  get getUserDetails() {
    return this.userDetails;
  }
}
