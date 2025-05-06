import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
import Home from "./home";
import ProductLayout from "./product-layout";
import ProductList from "./product-list";
import ProductDetail from "./product-detail";
import CategoryList from "./category-list";
// import CartComponent from "./cart";
import Login from "./login";
import Logout from "./logout";
import PrivateRoute from "./private-route";
const Cart = lazy(() => import("./cart"));
export default function RouterModule() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductLayout />}>
        <Route index element={<ProductList />} />
        <Route path="category/:categoryId" element={<CategoryList />} />
        <Route path=":productId" element={<ProductDetail />} />
      </Route>
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Suspense fallback={<div>Loading........</div>}>
              <Cart />
            </Suspense>
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
