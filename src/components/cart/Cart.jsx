import React, { useEffect } from "react";
import { useCart } from "../../context/CartContextProvider";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();
  const navigate = useNavigate();
  console.log(cart);
  useEffect(() => {
    getCart();
  }, []);
  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };
  return (
    <div>
      <h4>cart</h4>
      {cart?.products.map((elem) => (
        <div>
          <h1>{elem.item.name}</h1>
          <h3>{elem.item.price}</h3>
          <input
            type="number"
            onChange={(e) => changeProductCount(e.target.value, elem.item.id)}
            value={elem.count}
            min={1}
          />
          <h3>{elem.subPrice}</h3>
          <button onClick={() => deleteCartProduct(elem.item.id)}>
            delete
          </button>
          <button
            onClick={() => {
              cartCleaner();
              navigate("/payment");
            }}
          >
            buy now{cart?.totalPrice}
          </button>
          {/* <FontAwesomeIcon icon="fa-thin fa-thumbs-up" /> */}
        </div>
      ))}
    </div>
  );
}

export default Cart;
