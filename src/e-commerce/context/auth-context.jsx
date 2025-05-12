import { createContext, useContext, useEffect, useState } from "react";
//step1 create a context
const AuthContext = createContext();

//step2 create a provider
export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const found = localStorage.getItem("token");
    if (found) {
      setToken(found);
    }
  }, []);

  const login = () => {
    localStorage.setItem("token", "ASdSfsfsdfdfadafdfad");
    setToken("asddsfdsfdsfdsf");
  };
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  console.log(token);
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

//step3 create a consumer
export function useAuth() {
  return useContext(AuthContext);
}
