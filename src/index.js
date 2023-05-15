import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CrudContextProvider from "./context/CrudContextProvider";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/CartContextProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
    <CrudContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CrudContextProvider>
  </CartContextProvider>
);
