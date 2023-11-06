import { createContext } from "react";
import rootStore from "./rootStore";

export const rootStoreContext = createContext({
    rootStore: rootStore
})