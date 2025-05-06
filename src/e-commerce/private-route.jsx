import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const [isLog, setIsLog] = useState(null); // <-- Start with `null` instead of `false`
  const location = useLocation();

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    setIsLog(!!userToken); // <-- Convert token presence to boolean
  }, []);

  if (isLog === null) {
    return <div>Loading...</div>; // <-- Show loading state while checking token
  }

  return isLog ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
}
