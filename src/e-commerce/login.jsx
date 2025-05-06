import React from "react";
import { replace, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("token", "sadjkfhjsdghjkgnobgsfjobfdsij");
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
