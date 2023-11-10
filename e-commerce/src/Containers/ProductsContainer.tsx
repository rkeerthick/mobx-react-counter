
import Product from '../Components/Product/Product';
import { IProducts } from '../store/ProductStore';

interface IProductContainer {
    products: IProducts[]
}

const ProductsContainer = ({products}: IProductContainer) => {
    console.log(products, 'products')
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