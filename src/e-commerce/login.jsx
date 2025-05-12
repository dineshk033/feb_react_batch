import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./context/auth-context";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = () => {
    login();
    // localStorage.setItem("token", "sadjkfhjsdghjkgnobgsfjobfdsij");
    navigate(location.state.from, { replace: true });
  };
  return (
    <div className="row ">
      <h5 className="fs-4">Login</h5>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login{" "}
      </button>
    </div>
  );
}
