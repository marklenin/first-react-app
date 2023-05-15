import React, { useState } from "react";
import { useCrud } from "../../context/CrudContextProvider";
import { useNavigate } from "react-router-dom";
import "../porductStyles/ProductCard.css";

function AddProducts() {
  const { addProducts } = useCrud();
  const navigate = useNavigate();
  let obj = {
    title: "",
    price: 0,
    image: "",
    description: "",
    type: "",
  };
  const [product, setProduct] = useState(obj);

  const handleInputs = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
    console.log(e);
  };
  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="addAllInp"
      >
        <h1 style={{ fontSize: "1.5rem" }}>ADD NEW PRODUCT</h1>
        <input
          type="text"
          placeholder="PRODUCT NAME"
          onChange={(e) => handleInputs(e)}
          name="name"
        />
        <input
          type="number"
          placeholder="PRODUCT PRICE"
          onChange={(e) => handleInputs(e)}
          name="price"
        />
        <input
          type="text"
          placeholder="PRODUCT IMAGE"
          onChange={(e) => handleInputs(e)}
          name="image"
        />
        <input
          type="text"
          placeholder="PRODUCT DESCRIPTION"
          onChange={(e) => handleInputs(e)}
          name="description"
        />
        <select name="type" onChange={(e) => handleInputs(e)}>
          <option>CHOOSE TYPE OF PRODUCT</option>
          <option value="female">FEMALE</option>
          <option value="male">MALE</option>
          <option value="kids">KIDS</option>
        </select>
        <button
          onClick={() => {
            navigate("/");
            addProducts(product);
          }}
          className="addBtn"
        >
          ADD NEW PRODUCT
        </button>
      </div>
    </div>
  );
}

export default AddProducts;
