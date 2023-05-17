import React, { useEffect, useState } from "react";
import { useFavarites } from "../context/FavaritesContextProvider";

function Favarites() {
  const { getFav, favarites, deleteFavProduct } = useFavarites();
  useEffect(() => {
    getFav();
    console.log("work");
  }, []);
  useEffect(() => {
    getFav();
    console.log("work");
  }, []);

  return (
    <div>
      <div style={{ display: "grid" }}>
        <h1 style={{ textAlign: "center", marginBottom: "1em" }}>
          YOUR FAVORITES
        </h1>
        {favarites?.products.map((elem) => (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              borderBottom: "1px solid black",
              gap: "3em",
              justifyContent: "center",
            }}
          >
            <div>
              <img src={elem.item.image} alt="" width={150} />
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "1em",
                  minWidth: "300px",
                }}
              >
                <h1>{elem.item.title}</h1>
                <p>{elem.item.price}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignSelf: "flex-end",
                  paddingBottom: "25%",
                }}
              >
                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    color: "red",
                  }}
                  onClick={() => {
                    deleteFavProduct(elem.item.id);
                  }}
                >
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => {
            // cartCleaner();
            // navigate("/payment");
          }}
          style={{
            width: "60%",
            margin: "2em 0",
            padding: "1em 0",
            backgroundColor: "white",
            border: "1px solid black",
            justifySelf: "center",
            fontWeight: "700",
          }}
        >
          BUY NOW FOR
          {/* <span style={{ color: "green", fontWeight: "700" }}>
            {cart?.totalPrice}
          </span> */}
        </button>
      </div>
    </div>
  );
}

export default Favarites;
