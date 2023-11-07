import "./Products.scss";
import Product from "../Product/Product";
import useStore from "../../Hooks/useStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const Products = observer(() => {
  const {
    rootStore: { productStore },
  } = useStore();

  useEffect(() => {
    productStore.fetchProducts();
  }, [productStore]);
  return (
    <div className="products">
      {productStore.getProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
});

export default Products;
