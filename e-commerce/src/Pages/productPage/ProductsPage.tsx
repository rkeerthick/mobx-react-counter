import TopSection from "../../Components/TopSection/TopSection";
import Products from "../../Components/Products/Products";
import "./ProductsPage.scss";
import UseProducts from "../../Hooks/useProducts";
import useStore from "../../Hooks/useStore";

const ProductsPage = () => {
  const { data } = UseProducts();
  const { rootStore: { productStore } } = useStore();
  productStore.setProducts = data?.data;
  console.log(data?.data, 'data')
  return (
    <main className="allItems">
      <TopSection />
      <Products />
    </main>
  );
};

export default ProductsPage;
