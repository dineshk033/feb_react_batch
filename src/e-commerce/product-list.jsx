import React from "react";
import { AxiosInstance } from "./axios";
import ProductCard from "./product-card";
import useProductFetchList from "./useProductFetchList";
import { useDispatch } from "react-redux";
import { add } from "./redux/cartSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  // const [products, setProducts] = React.useState([]);
  const [products, loading, error] = useProductFetchList({
    url: "/products",
  });
  const addCart = (payload) => {
    dispatch(add(payload));
  };
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
          <ProductCard {...item} addCart={addCart} />
        </div>
      ))}
    </div>
  );
}
