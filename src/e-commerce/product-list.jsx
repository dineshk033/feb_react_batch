import React from "react";
import { AxiosInstance } from "./axios";
import ProductCard from "./product-card";
import useProductFetchList from "./useProductFetchList";

export default function ProductList() {
  // const [products, setProducts] = React.useState([]);
  const [products, loading, error] = useProductFetchList({
    url: "/products",
  });
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await AxiosInstance.get("/products");
  //       setProducts(res.data.products);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);
  if (loading) {
    return <div className="row p-4 bg-warning">loaging......</div>;
  }
  if (error) {
    return <div className="alert alert-danger ">{error}</div>;
  }
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
