import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContextProvider";
import { useCrud } from "../../context/CrudContextProvider";
import { useNavigate } from "react-router-dom";
import "../porductStyles/ProductCard.css";
import { IconButton, Button } from "@mui/material";
import { ADMIN, API } from "../../helpers/consts";
import { useAuth } from "../../context/AuthContextProvider";
import { useFavarites } from "../../context/FavaritesContextProvider";
import axios from "axios";

function ProductCard({ item }) {
  const { deleteProduct } = useCrud();
  const { addProductToCart, checkProductInCart } = useCart();
  const navigate = useNavigate();

  //!auth
  const {
    user: { email },
  } = useAuth();
  //!auth

  // !favarites
  const { addProductToFav, getFav } = useFavarites();
  // !favarites

  //!likes
  useEffect(() => {
    getOneProduct(item);
  }, []);
  const [like, setLike] = useState(false);
  const [countLike, setCountLike] = useState(0);

  const [product, setProduct] = useState();
  const getOneProduct = async (item) => {
    let { data } = await axios(`${API}/${item.id}`);
    setProduct(data);
  };

  //!likes

  const handleLikes = () => {
    if (!like) {
      setCountLike(countLike + 1);
    } else {
      setCountLike(countLike - 1);
    }
    let obj = {
      ...product,
      like: countLike,
    };
    setProduct(obj);
  };
  // useEffect(() => {
  //   editProduct();
  // }, [product]);

  // const editProduct = async (updatedProduct) => {
  //   await axios.patch(`${API}/${product?.id}`, product);
  //   console.log("hello");
  //   // getProducts();
  // };

  const handleFavarites = () => {};

  return (
    <div>
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
              onClick={() => {
                navigate(`/product-details/${item.id}`);
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

        {email === ADMIN ? (
          <>
            {/* <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
              Edit
            </Button>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              Delete
            </Button> */}
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
          </>
        ) : (
          ""
        )}
        <div>
          <button
            onClick={() => {
              setLike(!like);
              handleLikes();
            }}
          >
            like:
          </button>
          <p>{countLike}</p>
        </div>
        <div>
          <button
            onClick={() => {
              addProductToFav(item);
            }}
          >
            favarite
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
// 121117;
