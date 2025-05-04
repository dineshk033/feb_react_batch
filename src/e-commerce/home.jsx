import React from "react";
import Header from "./header";
import ProductList from "./product-list";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container px-4 px-lg-5 mt-5">
        <h1 className="text-center">Welcome to Our E-Commerce Store</h1>
        <p className="text-center">
          Discover the latest products and exclusive offers.
        </p>
        <ProductList />
      </div>
    </>
  );
}
