import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

AxiosInstance.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
      req.headers.credoz = "React course";
    }
    console.log(req.url);
    return req;
  },
  (err) => Promise.reject(err)
);
