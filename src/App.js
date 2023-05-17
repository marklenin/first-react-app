import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import { Button } from "bootstrap";

function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer />
      <Button />
    </div>
  );
}

export default App;
