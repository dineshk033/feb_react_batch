import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import Counter from "./counter/index.jsx";
import TimerApp from "./timer-app/index.jsx";
import App from "./App.jsx";
import BookLibrary from "./book-library/index.jsx";
import SignupForm from "./signup/index.jsx";
import Login from "./login/index.jsx";
import FileUpload from "./file-upload/index.jsx";
import Todo from "./todo/index.jsx";
import UserList from "./user-list/index.jsx";
import Blog from "./blog/index.jsx";

createRoot(document.getElementById("root")).render(<Blog />);
