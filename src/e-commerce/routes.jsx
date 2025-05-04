import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
import Home from "./home";
import ProductLayout from "./product-layout";
import ProductList from "./product-list";
import ProductDetail from "./product-detail";
import CategoryList from "./category-list";
import CartComponent from "./cart";

export default function RouterModule() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductLayout />}>
        <Route index element={<ProductList />} />
        <Route path="category/:categoryId" element={<CategoryList />} />
        <Route path=":productId" element={<ProductDetail />} />
      </Route>
      <Route path="/cart" element={<CartComponent />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
