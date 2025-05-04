import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

export default function ProductLayout() {
  return (
    <>
      <Header />
      <div className="container px-4 px-lg-5 mt-5">
        <h1 className="text-center">Welcome to Our E-Commerce Store</h1>
        <p className="text-center">
          Discover the latest products and exclusive offers.
        </p>
        <Outlet />
      </div>
    </>
  );
}
