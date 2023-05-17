import React, { createContext, useContext, useReducer } from "react";
import { CART } from "../helpers/consts";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/functions";

// создание контекста и кастомного хука для использования данного контекста
export const favaritesContext = createContext();
export const useFavarites = () => useContext(favaritesContext);

// начальное состояние для корзины
const INIT_STATE = {
  favarites: JSON.parse(localStorage.getItem("favarites")),
  cartLength: getCountProductsInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, favarites: action.payload };

    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };

    default:
      return state;
  }
}

const FavaritesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // функция для получения данных корзины из localStorage
  const getFav = () => {
    // достаем данные из localstorage под ключом cart
    let favarites = JSON.parse(localStorage.getItem("favarites"));
    if (!favarites) {
      localStorage.setItem(
        "favarites",
        JSON.stringify({
          products: [],
          //   totalPrice: 0,
        })
      );
      favarites = {
        products: [],
        // totalPrice: 0,
      };
    }

    // делаем проверку на то, что cart существует, если его в хранилище нет, то добавляем под ключом cart объект

    // обновление состояние корзины
    dispatch({
      type: CART.GET_CART,
      payload: favarites,
    });
    console.log(favarites);
  };

  // функция добавления в корзину
  const addProductToFav = (product) => {
    let favarites = JSON.parse(localStorage.getItem("favarites"));

    // проверка на существование cart
    if (!favarites) {
      favarites = { products: [] };
    }
    // формирование продукта, который будет хранится в корзине
    let newProduct = {
      item: product, // сам продукт
    };

    // проверка на то, содержится ли уже в корзине продукт, который хотим добавить
    let productToFind = favarites.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      favarites.products.push(newProduct); // добавляем продукт, если его не было в корзине
    } else {
      favarites.products = favarites.products.filter(
        (elem) => elem.item.id != product.id // удаляем, если был
      );
    }
    // пересчитываем общую стоимость корзины, т.к выше изменилось кол-во товаров в корзине
    // ca.totalPrice = calcTotalPrice(cart.products);

    // помещаем одновленные данные в localStorage
    localStorage.setItem("favarites", JSON.stringify(favarites));
    //обновляем состояние
    dispatch({ type: CART.GET_CART, payload: favarites });
  };

  // проверям находится ли товар в корзине (для стилей кнопки)
  const checkProductInFav = (id) => {
    let favarites = JSON.parse(localStorage.getItem("favarites"));

    if (favarites) {
      let newCart = favarites.products.filter((elem) => elem.item.id == id);
      return newCart.length > 0 ? true : false;
    }
  };

  // функция для изменения кол-ва одной позиции в корзине, принимает кол-во и id того продукта, у которого это количество должно поменяться
  //   const changeProductCount = (count, id) => {
  //     let favarites = JSON.parse(localStorage.getItem("favarites"));

  //     cart.products = cart.products.map((product) => {
  //       if (product.item.id == id) {
  //         product.count = count;
  //         product.subPrice = calcSubPrice(product);
  //       }
  //       return product;
  //     });
  //     cart.totalPrice = calcTotalPrice(cart.products);

  //     localStorage.setItem("cart", JSON.stringify(cart));
  //     dispatch({
  //       type: CART.GET_CART,
  //       payload: cart,
  //     });
  //   };

  // удаление товара из корзины
  const deleteFavProduct = (id) => {
    let favarites = JSON.parse(localStorage.getItem("favarites"));

    // перебираем массив cart.products, в резульате перебора останутся только те продукты, у которых id не совпадает с переданным id при вызове
    favarites.products = favarites.products.filter(
      (elem) => elem.item.id !== id
    );

    // cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("favarites", JSON.stringify(favarites));

    dispatch({
      type: CART.GET_CART,
      payload: favarites,
    });
  };

  const values = {
    getFav,
    addProductToFav,
    checkProductInFav,
    favarites: state.favarites,
    deleteFavProduct,
  };
  return (
    <favaritesContext.Provider value={values}>
      {children}
    </favaritesContext.Provider>
  );
};

export default FavaritesContextProvider;
