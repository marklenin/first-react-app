import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/navbar/Navbar";
import CheckoutPage from "./components/checkout/checkout";

function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <CheckoutPage/>
    </div>
  );
}

export default App;
