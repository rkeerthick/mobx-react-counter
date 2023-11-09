import { Navigate, Route, Routes } from "react-router-dom";
import CheckoutPage from "../../Pages/checkoutPage/CheckoutPage";
import ProductsPage from "../../Pages/productPage/ProductsPage";
import ProductViewPage from "../../Pages/producViewPae/ProductViewPage";
import LoginPage from "../../Pages/loginPage/LoginPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products/:productID" element={<ProductViewPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default Routing;
