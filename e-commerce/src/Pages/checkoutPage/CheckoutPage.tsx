
import { observer } from 'mobx-react-lite';
import useStore from '../../Hooks/useStore';
import { map, sum } from 'lodash';
import { IProducts } from '../../store/ProductStore';
import "./CheckoutPage.scss";

const CheckoutPage = observer(() => {
  const {
    rootStore: { cartStore },
  } = useStore();

  const totalPrice = sum(map(cartStore.getCart, (product) => product.price));

  const handleRemove = (product: IProducts) => {
    cartStore.removeProductInCart(product);
  };

  return (
    <div className="checkout">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">
            {cartStore.getTotalProduct}
          </span>
        </h4>
        <ul className="list-group mb-3">
          {map(cartStore.getCart, (product) => (
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleRemove(product)}
              >
                <h6 className="my-0">{product.title}</h6>
              </div>
              <span className="text-body-secondary">${product.price}</span>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${totalPrice}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default CheckoutPage