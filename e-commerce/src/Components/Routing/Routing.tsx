import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import ProductView from "../ProductView/ProductView";
import CheckoutPage from "../../Pages/CheckoutPage";
import ProductsPage from "../../Pages/ProductsPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products/:productID" element={<ProductView />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default Routing;
