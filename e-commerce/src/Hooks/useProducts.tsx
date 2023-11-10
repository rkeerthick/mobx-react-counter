import axios from "axios";
import { useQuery } from "react-query"
import { APIS } from "../Constants/apis";

const fetchProducts = () => {
  return axios.get(APIS.GET_PRODUCTS);
}

const UseProducts = () => {
  console.log(fetchProducts)
  return useQuery("products", fetchProducts)
}

export default UseProducts