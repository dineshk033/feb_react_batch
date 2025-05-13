import React from "react";
import RouterModule from "./routes";
import { AuthProvider } from "./context/auth-context";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function Ecommerce() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <RouterModule />
        </AuthProvider>
      </Provider>
    </>
  );
}
