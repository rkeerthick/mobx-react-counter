import Products from "../Products/Products";
import TopSection from "../TopSection/TopSection";
import "./AllItems.scss";

const AllItems = () => {
  return (
    <main className="allItems">
          <TopSection />
          <Products />
    </main>
  );
};

export default AllItems;
