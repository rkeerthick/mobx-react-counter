import { Link } from "react-router-dom";
import { IProuducts } from "../../store/ProductStore";
import "./Product.scss";
import { observer } from "mobx-react-lite";

export interface IProps {
  product: IProuducts;
}

const Product = observer(({product}: IProps) => {
  return (
    <div className="product">
      <div className="product__container">
        <div className="product__image">
          <img src={product.image} alt="Hi" />
        </div>
        <div className="product__description">
          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            praesentium dolor quo repudiandae? */}
            {product.title}
          </p>
          <div className="product__footer">
            <div className="product__buttons">
              <Link to={`/products/${product.id}`} className="link">
                View
              </Link>
            </div>
            <span className="price">${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Product;
