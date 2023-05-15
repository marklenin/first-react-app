import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCrud } from "../../context/CrudContextProvider";

function EditProduct() {
  const { getOneProduct, oneProduct, editProduct } = useCrud();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    setEditingProduct(oneProduct);
  }, [oneProduct]);

  const [editingProduct, setEditingProduct] = useState(oneProduct);

  const handleInputs = (e) => {
    // if (e.target.name === "price") {
    //   let obj = {
    //     ...editingProduct,
    //     [e.target.name]: Number(e.target.value),
    //   };
    //   setEditingProduct(obj);
    // } else
    {
      let obj = {
        ...editingProduct,
        [e.target.name]: e.target.value,
      };
      setEditingProduct(obj);
    }
  };

  console.log(editingProduct);

  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="addAllInp"
      >
        <h1 style={{ fontSize: "1.5rem" }}>EDIT PRODUCT</h1>
        <input
          type="text"
          placeholder="CHANGE PRODUCT NAME"
          onChange={handleInputs}
          name="title"
          value={editingProduct.title}
        />
        <input
          type="text"
          placeholder="CHANGE PRODUCT PRICE"
          onChange={(e) => handleInputs(e)}
          name="price"
          value={editingProduct.price}
        />
        <input
          type="text"
          placeholder="CHANGE PRODUCT IMAGE"
          onChange={(e) => handleInputs(e)}
          name="image"
          value={editingProduct.image}
        />
        <input
          type="text"
          placeholder="CHANGE PRODUCT DESCRIPTION"
          onChange={(e) => handleInputs(e)}
          name="description"
          value={editingProduct.description}
        />
        <select name="type" onChange={(e) => handleInputs(e)}>
          <option>CHANGE TYPE OF PRODUCT</option>
          <option value="female">FEMALE</option>
          <option value="male">MALE</option>
          <option value="kids">KIDS</option>
        </select>
        <button
          onClick={() => {
            navigate("/");
            editProduct(editingProduct);
          }}
          className="addBtn"
        >
          SAVE CHANGES
        </button>
      </div>
    </div>
  );
}

export default EditProduct;
