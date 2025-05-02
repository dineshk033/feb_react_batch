import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./blog/index.jsx";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Blog />
  </BrowserRouter>
);
createRoot(document.getElementById("root")).render(<App />);
