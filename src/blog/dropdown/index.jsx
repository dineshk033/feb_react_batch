import { useEffect, useState } from "react";
import { AxiosInstance } from "../axios";

const CustomDropdown = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState("");
  const handleChange = async (event) => {
    const value = event.target.value;
    setSelected(value);
    console.log(value);
    // const response = await AxiosInstance.get(`/products/category/${value}`);
    // setProducts(response.data.products);
  };
  const fetchOptions = async () => {
    const response = await AxiosInstance.get("/products/category-list");
    setCategory(response.data);
  };
  useEffect(() => {
    fetchOptions();
  }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      if (selected) {
        const response = await AxiosInstance.get(
          `/products/category/${selected}`
        );
        setProducts(response.data.products);
      } else {
        setProducts([]);
      }
    };
    fetchProducts();
  }, [selected]);
  return (
    <div className="row">
      <h6>Api based dropdown</h6>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleChange}
        value={selected}
      >
        <option selected>Open this select menu</option>
        {category.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select className="form-select mt-4" aria-label="Default select example">
        <option selected>Open this select menu</option>
        {products.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
