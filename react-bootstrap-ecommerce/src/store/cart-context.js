import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  addItems: (item) => {},
});

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemHandler = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  return (
    <CartContext.Provider
      value={{ items: cartItems, addItems: addItemHandler }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
