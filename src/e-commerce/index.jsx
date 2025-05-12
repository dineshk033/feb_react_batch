import React from "react";
import RouterModule from "./routes";
import { AuthProvider } from "./context/auth-context";

export default function Ecommerce() {
  return (
    <>
      <AuthProvider>
        <RouterModule />
      </AuthProvider>
    </>
  );
}
