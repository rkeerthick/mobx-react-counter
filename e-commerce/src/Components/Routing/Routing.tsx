import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import AllItems from "../AllItems/AllItems";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
      <Route path="/products" element={<AllItems />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routing;
