import axios from "axios";
import {APIS} from "../Constants/apis"

export function fetchToken(data) {
    const result = axios.post(APIS.POST_LOGIN, data);
    console.log(result, 'token')
    return result;
}

export function fetchAllProducts() {
    return axios.get(APIS.GET_PRODUCTS);
}

export function fetchProduct(id) {
    return axios.get(APIS.GET_PRODUCT+`/${id}`);
}