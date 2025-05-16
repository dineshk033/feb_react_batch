import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Blog from "./blog/index.jsx";
import { BrowserRouter } from "react-router-dom";
import Ecommerce from "./e-commerce/index.jsx";

const App = () => (
  <BrowserRouter>
    <Blog />
  </BrowserRouter>
);
createRoot(document.getElementById("root")).render(<App />);
