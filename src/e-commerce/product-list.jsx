import React, { useEffect } from "react";
import { AxiosInstance } from "./axios";
import ProductCard from "./product-card";

export default function ProductList() {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await AxiosInstance.get("/products");
        setProducts(res.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="row">
      {products.map((item) => (
        <div key={item.id} className="col-lg-3 col-md-4 mb-4">
          <ProductCard {...item} />
        </div>
      ))}
    </div>
  );
}
