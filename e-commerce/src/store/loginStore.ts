import axios from "axios";
import { action, computed, makeObservable, observable } from "mobx";
import { IRootStore } from "./rootStore";

class loginStore {
  loginToken: string = "";
  rootStore: IRootStore
  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      loginToken: observable,
      fetchUserToken: action,
      getUserToken: computed,
    });
      this.rootStore = rootStore;
  }

  logout() {
    this.loginToken = "";
  }

  async fetchUserToken(userName: string, password: string) {
    const data = {
      userName: userName,
      password: password,
    };

    const tokenRequest = await axios.post(
      "https://fakestoreapi.com/auth/login",
      data
    );

    this.loginToken = tokenRequest.data.token;
  }

  get getUserToken() {
    return this.loginToken;
  }
}
export default loginStore;
