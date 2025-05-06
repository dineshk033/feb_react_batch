import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="row ">
      <h5 className="fs-4">logout</h5>
      <button className="btn btn-primary" onClick={handleLogin}>
        logout
      </button>
    </div>
  );
}
