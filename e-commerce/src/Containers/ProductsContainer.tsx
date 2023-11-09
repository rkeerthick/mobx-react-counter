
import Product from '../Components/Product/Product';
import { IProducts } from '../store/ProductStore';

interface IProductContainer {
    products: IProducts[]
}

const ProductsContainer = ({products}: IProductContainer) => {
    
    return (
      <>
        <div className="products">
          {products?.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </>
    );
}

export default ProductsContainer