import React, { useEffect, useState } from "react";
import { useCrud } from "../../context/CrudContextProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "../../context/CartContextProvider";
import ProductCard from "./ProductCard";

import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function ProductList() {
  const { products, getProducts, deleteProduct, handleSort } = useCrud();
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  //!pagination
  const [page, setPage] = React.useState(1);

  const itemsPerPage = 8; //amount of elements in page
  const count = Math.ceil(products?.length / itemsPerPage); // total amount of pages

  const handleChange = (event, value) => {
    setPage(value);
  };

  function currentDate() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "0.5em",
          flexWrap: "wrap",
        }}
      >
        {currentDate().map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <Stack spacing={1} style={{
        display: "flex",
        justifyContent: "center"}}>
        <Typography>Page: {page}</Typography>
        <Pagination style={{
          display:"flex",
       justifyContent:"center",
        }} count={count} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
}

export default ProductList;
