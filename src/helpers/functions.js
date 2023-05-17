export const getCountProductsInCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
};

// calculate total price of one product in cart(amout*price)
export const calcSubPrice = (product) => {
  return +product.count * product.item.price;
};

// calculate total price of all products in cart
export const calcTotalPrice = (products) => {
  return products.reduce((acc, curr) => {
    return acc + curr.subPrice;
  }, 0);
};
