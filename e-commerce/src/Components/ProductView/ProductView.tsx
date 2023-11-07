import { useParams } from "react-router-dom";
import useStore from "../../Hooks/useStore";
import { find } from "lodash";
import { observer } from "mobx-react-lite";

const ProductView = observer(() => {
  const {
    rootStore: { productStore },
  } = useStore();
  const { productID } = useParams();

  const product = find(
    productStore.getProducts,
    (prod) => prod.id.toString() === productID
  );

  console.log(product, "product");

  return <div>ProductView</div>;
});

export default ProductView;
