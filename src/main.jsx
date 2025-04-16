import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import Counter from "./counter/index.jsx";
import TimerApp from "./timer-app/index.jsx";
import App from "./App.jsx";
import BookLibrary from "./book-library/index.jsx";

createRoot(document.getElementById("root")).render(<BookLibrary />);
