import React, { useState } from 'react';

import CartContext from "./cart-context";

const CartProvider = props => {
  const [cartItems, setCartItems] = useState([]);
  
  const addItemToCartHandler = (item) => {
    console.log();
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;

      if(existingItem){
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + item.quantity
        }
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      }
      else{
        updatedItems = [...prevItems, item];
      }
      
      return updatedItems;
    })
  };

  const removeItemFromCartHandler = id => {
    setCartItems(prevItems => {
      const itemIndex = prevItems.findIndex(i => i.id === id);
      const item = prevItems[itemIndex];

      const updatedItem = {...item, quantity: item.quantity-1};

      let updatedCartItems = [...prevItems];
      updatedCartItems[itemIndex] = updatedItem;

      if(updatedItem.quantity === 0) {
        updatedCartItems.splice(itemIndex, 1);
      }
      
      return updatedCartItems;
    })
  };

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