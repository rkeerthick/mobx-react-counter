import { CountStore } from "./CountStore";
import { GithubUserDetailsStore } from "./GithubUserDetailsStore";

export interface IRootStore {
  countStore: CountStore;
  userDetailsStore: GithubUserDetailsStore
}


export class RootStore implements IRootStore {
  countStore: CountStore;
  userDetailsStore: GithubUserDetailsStore;

  constructor() {
    this.countStore = new CountStore(this);
    this.userDetailsStore = new GithubUserDetailsStore(this);
  }
}