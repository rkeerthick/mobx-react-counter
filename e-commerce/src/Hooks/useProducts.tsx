
import { useQuery } from "react-query"
import { fetchAllProducts } from "../utils/functions";


const UseProducts = () => {
  return useQuery("products", fetchAllProducts)
}

export default UseProducts