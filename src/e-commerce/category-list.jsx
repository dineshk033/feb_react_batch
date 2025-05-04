import React, { useEffect } from "react";
import { AxiosInstance } from "./axios";
import ProductCard from "./product-card";
import { useParams } from "react-router-dom";

export default function CategoryList() {
  const [products, setProducts] = React.useState([]);
  const categoryId = useParams().categoryId; // Example category ID, replace with actual logic if needed
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await AxiosInstance.get("/products/category/" + categoryId);
        setProducts(res.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [categoryId]);
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
