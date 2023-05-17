import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CrudContextProvider from "./context/CrudContextProvider";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/CartContextProvider";
import "./index.css";
import AuthContextProvider from "./context/AuthContextProvider";
import FavaritesContextProvider from "./context/FavaritesContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FavaritesContextProvider>
      <AuthContextProvider>
        <CartContextProvider>
          <CrudContextProvider>
            <App />
          </CrudContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </FavaritesContextProvider>
  </BrowserRouter>
);
