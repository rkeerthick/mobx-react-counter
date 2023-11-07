import TopSection from "../../Components/TopSection/TopSection";
import Products from "../../Components/Products/Products";
import "./ProductsPage.scss";

const ProductsPage = () => {
  return (
    <main className="allItems">
      <TopSection />
      <Products />
    </main>
  );
};

export default ProductsPage;
