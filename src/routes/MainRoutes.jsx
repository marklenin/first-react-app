import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage";
import EditProductPage from "../pages/EditProductPage";
import CartPage from "../pages/CartPage";
import AddProductsPage from "../pages/AddProductsPage";
import PaymentPage from "../pages/PaymentPage";

function MainRoutes() {
  const PUBLIC_ROUTES = [
    { link: "/", element: <ProductsPage />, id: 1 },
    { link: "/add", element: <AddProductsPage />, id: 2 },
    { link: "/edit/:id", element: <EditProductPage />, id: 3 },
    { link: "/cart", element: <CartPage />, id: 4 },
    { link: "/payment", element: <PaymentPage />, id: 5 },
    { link: "*", element: <NotFoundPage />, id: 6 },
  ];

  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </div>
  );
}

export default MainRoutes;
