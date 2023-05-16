import React from "react";
import { useCart } from "../../context/CartContextProvider";
import { useCrud } from "../../context/CrudContextProvider";
import { useNavigate } from "react-router-dom";
import "../porductStyles/ProductCard.css";

function ProductCard({ item }) {
  const { deleteProduct } = useCrud();
  const { addProductToCart, checkProductInCart } = useCart();
  const navigate = useNavigate();

  return (
    <div>
      {/* <h1>
        {item.name} {item.price}
      </h1>
      <span style={{}}>
        <button onClick={() => navigate(`/edit/${item.id}`)}>edit</button>
        <button onClick={() => deleteProduct(item.id)}>delete</button>
      </span>
      <button
        onClick={() => {
          navigate("/cart");
          addProductToCart(item);
        }}
        color={checkProductInCart(item.id) ? "primary" : ""}
      >
        add to cart
      </button> */}
      <div className="eachProduct">
        <div
          style={{ width: "300px", minWidth: "250px", position: "relative" }}
        >
          <img src={item.image} alt="#" width="100%" />

          <div
            className="quickView"
            style={{
              // width: "100%",
              display: "flex",
              justifyContent: "center",
              // margin: "0.5em",
              position: "absolute",
              bottom: "7%",
              left: "13%",
            }}
          >
            <button
              className="quicekViewBtn"
              style={{
                backgroundColor: "white",
                border: "1px solid black",
                padding: "0.5em 5em",
              }}
            >
              QUICK VIEW
            </button>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "0.5em",
            margin: "0.5em 0",
          }}
        >
          <p>{item.title.toUpperCase()}</p>
          <p>{item.price} com</p>
        </div>
        <span
          style={{
            display: "flex",
            gap: "1em",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <button
            className="btnDelAndEdit"
            onClick={() => navigate(`/edit/${item.id}`)}
          >
            edit
          </button>
          <button
            className="btnDelAndEdit"
            onClick={() => deleteProduct(item.id)}
          >
            delete
          </button>
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
