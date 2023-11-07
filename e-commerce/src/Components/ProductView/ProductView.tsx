import { useParams } from "react-router-dom";
import useStore from "../../Hooks/useStore";
import { find } from "lodash";
import { observer } from "mobx-react-lite";
import "./ProductView.scss";

const ProductView = observer(() => {
  const {
    rootStore: { productStore },
  } = useStore();
  const { productID } = useParams();

  const product = find(
    productStore.getProducts,
    (prod) => prod.id.toString() === productID
  );

    const handleBuyNow = () => {
        
    }

  return (
    <div className="product-view">
      <div className="product-view__container">
        <div className="product-view__container__left">
          <img src={product?.image} alt="" />
        </div>
        <div className="product-view__container__right">
          <span className="title">{product?.title}</span>
          <span className="description">{product?.description}</span>
          <button type="button" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
});

export default ProductView;
