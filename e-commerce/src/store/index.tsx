import { createContext } from "react";
import { RootStore } from "./RootStore";

 const rootStoreContext = createContext({
    rootStore: RootStore
 })
export default rootStoreContext;