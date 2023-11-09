import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./RootStore";
import { find } from "lodash";
import { APIS } from "../Constants/apis";
import { fetchToken } from "../utils/functions";

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
      fetchUserToken: action,
      getUserToken: computed,
    });
    this.rootStore = rootStore;
  }

  logout() {
    this.loginToken = "";
    this.userDetails = {} as IUserDetails;
  }
  async fetchUserToken(userName: string, password: string) {
    const data = {
      username: userName,
      password: password,
    };
    debugger;
    const tokenRes = await fetchToken(data);
    console.log(tokenRes, "tokenRes");
    const userLists = await axios.get(APIS.GET_USERS);
    if (tokenRes.data.token) {
      const user = find(userLists.data, (u) => u.username === userName);
      this.loginToken = tokenRes.data.token;
      this.userDetails = user;
    }
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
