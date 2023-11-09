import axios from "axios";
import { useQuery } from "react-query"
import { APIS } from "../Constants/apis";
export interface IProductHook {
  data: Datum[];
  status: number;
  statusText: string;
  headers: Headers;
  config: Config;
  request: Env;
}

export interface Config {
  transitional: Transitional;
  adapter: string[];
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Env;
  headers: Headers2;
  method: string;
  url: string;
}

export interface Headers2 {
  Accept: string;
}

export interface Env {}

export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface Headers {
  "cache-control": string;
  "content-length": string;
  "content-type": string;
  expires: string;
  pragma: string;
}

export interface Datum {
  id: number;
  name: string;
  alterEgo: string;
}

const fetchProducts = () => {
  return axios.get(APIS.GET_PRODUCTS);
}

const UseProducts = () => {
  console.log(fetchProducts)
  return useQuery("products", fetchProducts)
}

export default UseProducts