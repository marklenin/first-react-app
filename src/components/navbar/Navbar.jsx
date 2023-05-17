import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useCrud } from "../../context/CrudContextProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getCountProductsInCart } from "../../helpers/functions";
import { MenuItem, MenuList } from "@mui/material";
import { useAuth } from "../../context/AuthContextProvider";

function Navbar() {
  const { handleSort } = useCrud();
  const [searchInput, setSearchInput] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const navigate = useNavigate();

  //!search
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);
  //!search

  //!auth
  const {
    handleLogout,
    user: { email },
    cart,
  } = useAuth();
  //!auth

  return (
    <>
      <div style={{ borderBottom: "2px solid #ecedee" }}>
        <div
          className="navbar container"
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 0",
          }}
        >
          <div className="filter" style={{ display: "flex", gap: "1em" }}>
            <button
              name="all"
              onClick={(e) => {
                handleSort(e);
                setFilter(e.target.name);
              }}
            >
              ALL
            </button>
            <button
              name="male"
              onClick={(e) => {
                handleSort(e);
                setFilter(e.target.name);
              }}
            >
              MALE
            </button>
            <button
              name="female"
              onClick={(e) => {
                handleSort(e);
                setFilter(e.target.name);
              }}
            >
              FEMALE
            </button>
            <button
              name="kids"
              onClick={(e) => {
                handleSort(e);
                setFilter(e.target.name);
              }}
            >
              KIDS
            </button>

            <button
              name="kids"
              onClick={(e) => {
                navigate("/favarites");
              }}
            >
              FAVARITES
            </button>
          </div>
          <div className="logo" style={{ cursor: "pointer" }}>
            <h1 onClick={() => navigate("/")}>MadHappy</h1>
          </div>
          <div className="navbar-cart" style={{ display: "flex", gap: "1em" }}>
            <button
              onClick={() => setSearchInput(!searchInput)}
              className="searchBtn"
            >
              SEARCH
            </button>

            {email ? (
              <MenuList>
                <MenuItem>hello, {email}!</MenuItem>
                <button
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  LOG OUT
                </button>
              </MenuList>
            ) : (
              // <MenuItem onClick={() => navigate("/auth")}>Login</MenuItem>
              <button onClick={() => navigate("/auth")}>LOG IN</button>
            )}

            <button onClick={() => navigate("cart")}>
              CART[{getCountProductsInCart()}]
            </button>
          </div>
        </div>
      </div>

      {searchInput ? (
        <div
          style={{
            height: "63px",
            borderBottom: "2px solid #ecedee",
          }}
          className="searchDiv"
        >
          <input
            type="text"
            className="searchInp"
            placeholder="SEARCH"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button className="closeBtn" onClick={() => setSearchInput(false)}>
            x
          </button>
        </div>
      ) : (
        <div
          style={{
            height: "63px",
            padding: "1.5em 2.2em",
            fontWeight: "700",
            fontSize: " 0.85em",
          }}
        >
          <p>ALL/{filter.toUpperCase()}</p>
        </div>
      )}
    </>
  );
}

export default Navbar;
