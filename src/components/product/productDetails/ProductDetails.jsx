import React, { useEffect, useState } from "react";
import { useCrud } from "../../../context/CrudContextProvider";
import { useParams } from "react-router-dom";
import "./ProductDetailsModalWindow.css";
import { useCart } from "../../../context/CartContextProvider";
import { getCountProductsInCart } from "../../../helpers/functions";
import { API } from "../../../helpers/consts";
import axios from "axios";

function ProductDetails() {
  const { getOneProduct, oneProduct, getProducts } = useCrud();
  const { addProductToCart, checkProductInCart } = useCart();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  const [sizeState, setSizeState] = useState("M");
  const [counter, setCounter] = useState(8);

  const [comment, setComment] = useState("");
  const submitComment = async () => {
    let obj = { ...oneProduct };
    obj.comment.push({ comment });
    console.log(obj, "obj");
    await axios.patch(`${API}/${oneProduct.id}`, obj);
  };

  console.log(oneProduct.comment);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <div style={{ width: "50%" }}>
        <img src={oneProduct.image} alt={oneProduct.title} width="100%" />
      </div>
      <div style={{ width: "50%", minWidth: "350px" }}>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem" }}>
            {oneProduct.title?.toUpperCase()}
          </h1>
          <p style={{ fontSize: "1.5rem", margin: "1em 0" }}>
            {oneProduct.price} com
          </p>
          <div
            style={{
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              padding: "1em 0",
            }}
          >
            <div className="sizeBtns" style={{ margin: "1em 0" }}>
              <p style={{ margin: "0.3em" }}>Size:{sizeState}</p>
              <div style={{ fontSize: "2.5rem" }} className="sizeBtnsOnly">
                <button name="S" onClick={(e) => setSizeState(e.target.name)}>
                  S
                </button>
                <button name="M" onClick={(e) => setSizeState(e.target.name)}>
                  M
                </button>
                <button name="L" onClick={(e) => setSizeState(e.target.name)}>
                  L
                </button>
                <button name="XL" onClick={(e) => setSizeState(e.target.name)}>
                  XL
                </button>
                <button name="XXL" onClick={(e) => setSizeState(e.target.name)}>
                  XXL
                </button>
              </div>
            </div>
            <div style={{ fontSize: "1.2rem", margin: "0.5em 0" }}>
              <p style={{ margin: "0.3em 0" }}>Quantity</p>
              <div
                className="counterBtns"
                style={{
                  border: "1px solid black",
                  display: "flex",
                  width: "20%",
                  justifyContent: "space-evenly",
                  margin: "0.5em 0",
                }}
              >
                <button>-</button>
                <p>{counter}</p>
                <button>+</button>
              </div>
            </div>
          </div>
          <div
            className="detailsDescr"
            style={{ borderBottom: "1px solid black", padding: "1em 0" }}
          >
            <h1 style={{ fontWeight: "400", margin: "0.5em 0" }}>
              DESCRIPTION
            </h1>
            <ul style={{ fontSize: "1.2rem" }}>
              <li>100% Acrylic crochet link knit</li>
              <li>1x1 yarn dyed stripe rib collar & armholes</li>
              <li>The Hundreds & 20 tackle twill applique’ at front chest</li>
              <li>Solid Bomb logo embroidery at left chest</li>
              <li>Solid Bomb label at side seam</li>
              <li>Colors: Black, Gold, White</li>
              <li>Sizes: S-M-L-XL-2XL</li>
            </ul>
          </div>
          <button
            style={{
              width: "100%",
              border: "1px solid black",
              backgroundColor: `${checkProductInCart(id) ? "green" : "white"}`,
              padding: "1.5em 0",
              margin: "2em 0",
            }}
            onClick={() => {
              addProductToCart(oneProduct);
            }}
          >
            ADD TO BAG
          </button>

          <div
            className="iconsContainer"
            style={{
              border: "1px solid black",
              padding: "0 1em",
              display: "grid",
            }}
          >
            <div>
              <i class="fa-solid fa-box"></i> <p>Free shipping over $120</p>
            </div>
            <div
              style={{
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
              }}
            >
              <i class="fa-solid fa-shirt"></i> <p>Fit Guide</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <i class="fa-solid fa-comment"></i> <p>Leave a comment</p>
            </div>
            <input
              type="text"
              onChange={(e) => {
                setComment(e.target.value);
              }}
              value={comment}
            />
            <button
              onClick={() => {
                submitComment();
                setComment("");
              }}
            >
              comment
            </button>
          </div>
        </div>
      </div>
      <div className="comments">
        {oneProduct?.comment?.map((item) => (
          <p>{item?.comment}</p>
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
