import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./counter/index.jsx";

createRoot(document.getElementById("root")).render(<Counter />);
