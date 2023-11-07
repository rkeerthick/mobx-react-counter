import "./Products.scss";
import useStore from "../../Hooks/useStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import ProductsContainer from "../../Containers/ProductsContainer";

const Products = observer(() => {
  const {
    rootStore: { productStore },
  } = useStore();

  useEffect(() => {
    productStore.fetchProducts();
  }, [productStore]);

  return (
    <ProductsContainer products={productStore.getProducts} />
  );
});

export default Products;
