import '../Components/AllItems/AllItems.scss'
import TopSection from '../Components/TopSection/TopSection';
import Products from '../Components/Products/Products';

const ProductsPage = () => {
    return (
      <main className="allItems">
        <TopSection />
        <Products />
      </main>
    );
}

export default ProductsPage