import { useEffect, useState } from "react";
import { AxiosInstance } from "./axios";

function useProductFetchList(props) {
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setResData([]);
    try {
      const res = await AxiosInstance.get(props.url);
      setResData(res.data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Oops something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [resData, loading, error, fetchData];
}

export default useProductFetchList;
