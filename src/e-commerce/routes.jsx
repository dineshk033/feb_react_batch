import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
import Home from "./home";

export default function RouterModule() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<div>Products</div>} />
      <Route path="/cart" element={<div>Cart</div>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
