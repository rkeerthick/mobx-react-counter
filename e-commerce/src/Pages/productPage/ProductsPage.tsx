import TopSection from "../../Components/TopSection/TopSection";
import Products from "../../Components/Products/Products";
import "./ProductsPage.scss";
import UseProducts from "../../Hooks/useProducts";
import useStore from "../../Hooks/useStore";
import { observer } from "mobx-react";

const ProductsPage = () => {
  const { data } = UseProducts();
  const {
    rootStore: { productStore },
  } = useStore();
  console.log(data?.data, "data");
  productStore.setProducts = data?.data;
  return (
    <main className="allItems">
      <TopSection />
      <Products />
    </main>
  );
};

export default ProductsPage;
