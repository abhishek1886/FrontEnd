import React, { useState } from 'react';

import CartContext from "./cart-context";

const CartProvider = props => {
  const [cartItems, setCartItems] = useState([]);
  
  const addItemToCartHandler = (item) => {
    console.log();
    setCartItems(prevItems => {
      return [...prevItems, item ];
    })
  };

  const removeItemFromCartHandler = id => {};

  const cartContext = {
    items: cartItems,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }
return <CartContext.Provider value={cartContext} >
  {props.children}
</CartContext.Provider>
}

export default CartProvider;