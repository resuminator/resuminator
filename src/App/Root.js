import React from "react";
import { Provider } from "react-redux";
import { AuthProvider } from "../components/Auth/AuthContext";
import App from "./App";

const Root = ({ store }) => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  );
};

export default Root;
