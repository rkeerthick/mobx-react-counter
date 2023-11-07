import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import AllItems from "../AllItems/AllItems";
import ProductView from "../ProductView/ProductView";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
      <Route path="/products" element={<AllItems />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products/:productID" element={<ProductView />} />
    </Routes>
  );
};

export default Routing;
