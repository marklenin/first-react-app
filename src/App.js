import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/navbar/Navbar";
import CheckoutPage from "./components/checkout/checkout";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <CheckoutPage/>
      <Footer />
    </div>
  );
}

export default App;
