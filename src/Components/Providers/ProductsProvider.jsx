import React, { useContext, useReducer } from "react";
import { ProductsData } from "../DataBase/products";
import _ from "lodash";
const productsContext = React.createContext();
const productsContextDispatcher = React.createContext();
// const initialState = [
//   { title: "react.js", price: "99 $", id: 1, quantity: 1 },
//   { title: "node.js", price: "79 $", id: 2, quantity: 2 },
//   { title: "javascript", price: "80 $", id: 3, quantity: 3 },
// ];
const reducer = (state, action) => {
  switch (action.type) {
    case "remove": {
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      //clone the selected index and update the quantity :
      const decrementElement = { ...state[index] };
      if (decrementElement.quantity === 1) {
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      } else {
        const updatedProducts = [...state];
        decrementElement.quantity--;
        updatedProducts[index] = decrementElement;

        return updatedProducts;
      }
    }
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      //clone the selected index and update the quantity :
      const product = { ...state[index] };
      product.quantity++;
      //update products
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }
    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      //clone the selected index and update the quantity :
      const product = { ...state[index] };
      product.title = action.event.target.value;
      //update products
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }
    case "filter":
      const value = action.selectedOption.value;
      if (value === "") {
        return ProductsData;
      } else {
        const updatedProducts = ProductsData.filter(
          (p) => p.availableSize.indexOf(value) >= 0
        );
        return updatedProducts;
      }
    case "sort": {
      const value = action.selectedOption.value;
      const products = [...state];
      if (value === "lowest") {
        return _.orderBy(products, ["price"], ["asc"]);
      } else return _.orderBy(products, ["price"], ["desc"]);
    }
    case "search": {
      const value = action.event.target.value;
      if (value === "") {
        return state;
      } else {
        const filterProducts = state.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        );
        return filterProducts;
      }
      // console.log(action.event);
      // return state;
    }
    default:
      return state;
  }
};
const ProductsProvider = ({ children }) => {
  const [Products, dispatch] = useReducer(reducer, ProductsData);

  return (
    <productsContext.Provider value={Products}>
      <productsContextDispatcher.Provider value={dispatch}>
        {children}
      </productsContextDispatcher.Provider>
    </productsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(productsContext);

export const useProductsActions = () => {
  return useContext(productsContextDispatcher);

  // return {
  //   removeHandler,
  //   incrementHandler,
  //   decrementHandler,
  //   changeInputHandler,
  // };
};
