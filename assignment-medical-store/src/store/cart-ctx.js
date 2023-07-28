import React from "react";
import { useState } from "react";

const CartContext = React.createContext({
  items: "",
  addItems: () => {},
  removeItems: () => {},
});

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const addItemHandler = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const setIsDataFetchedHandler = () => {
    setIsDataFetched(true);
  }

  console.log(cartItems);

  const value = {
    items: cartItems,
    addItems: addItemHandler,
    isDataFetched: isDataFetched,
    setIsDataFetched: setIsDataFetchedHandler
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartContext;
