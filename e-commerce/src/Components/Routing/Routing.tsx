import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import CheckoutPage from "../../Pages/checkoutPage/CheckoutPage";
import ProductsPage from "../../Pages/productPage/ProductsPage";
import ProductViewPage from "../../Pages/producViewPae/ProductViewPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products/:productID" element={<ProductViewPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default Routing;
