import { createContext, useContext, useReducer } from "react";
import { API } from "../helpers/consts";
import axios from "axios";

export const crudContext = createContext();

export const useCrud = () => {
  return useContext(crudContext);
};

const INIT_STATE = {
  products: [],
  oneProduct: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };

    default:
      return state;
  }
};

const CrudContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProducts = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const getProducts = async () => {
    let { data } = await axios(`${API}${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  const getOneProduct = async (id) => {
    let { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };

  const editProduct = async (updatedProduct) => {
    await axios.patch(`${API}/${updatedProduct.id}`, updatedProduct);
    getProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  //!filter
  const handleSort = async (e) => {
    let value = e.target.name;
    console.log(value, "value");
    if (value === "all") {
      getProducts();
    } else {
      let { data } = await axios.get(`${API}?type=${value}&_order=asc`);

      dispatch({
        type: "GET_PRODUCTS",
        payload: data,
      });
    }
  };

  const values = {
    getProducts,
    addProducts,
    products: state.products,
    editProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    deleteProduct,
    handleSort,
  };
  return <crudContext.Provider value={values}>{children}</crudContext.Provider>;
};

export default CrudContextProvider;
