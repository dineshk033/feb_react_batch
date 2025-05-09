import { useEffect, useState } from "react";

function useAuth() {
  const [token, setToken] = useState(null);
  /***
   * logic here
   */

  useEffect(() => {
    const found = localStorage.getItem("token");
    if (found) {
      setToken(true);
    }
  }, []);
  return [token, setToken];
}

export default useAuth;
