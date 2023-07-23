import React, { useState, useContext } from "react";

import AvailableTshirtsContext from "./availableTshirt-context";

const CartContext = React.createContext({
  tshirtCartData: [],
});

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const availableTshirtCtx = useContext(AvailableTshirtsContext);

  console.log(availableTshirtCtx.tshirts);

  const addItemHandler = (item, size) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      const existingItem = prevItems[existingItemIndex];
      const availableItem = availableTshirtCtx.tshirts.find(i => i.id === item.id);

      let updatedItemList;
      let updatedItem;
      let flag = 0;

      if (existingItem) {
        if (size === "sQuantity" && availableItem.sQuantity > 0){          
          updatedItem = { ...existingItem, sQuantity: existingItem.sQuantity + 1 };
          flag = 1
        }

        else if (size === "mQuantity" && availableItem.mQuantity > 0){
          updatedItem = { ...existingItem, mQuantity: existingItem.mQuantity + 1 };
          flag = 1;
        }
          
        else if (size === "lQuantity" && availableItem.lQuantity > 0){
          updatedItem = { ...existingItem, lQuantity: existingItem.lQuantity + 1 };
          flag = 1;
        }
          
        updatedItemList = [...prevItems];
        if(flag) updatedItemList[existingItemIndex] = updatedItem;

      } else {
          if (size === "sQuantity")
            updatedItemList = [...prevItems, {...item, sQuantity: 1, mQuantity: 0, lQuantity: 0}];
          else if (size === "mQuantity")
            updatedItemList = [...prevItems, {...item, sQuantity: 0, mQuantity: 1, lQuantity: 0}];
          else if (size === "lQuantity")
          updatedItemList = [...prevItems, {...item, sQuantity: 0, mQuantity: 0, lQuantity: 1}];
      }
      
      return updatedItemList;
    });
  };

  const cartData = {
    tshirtCartData: cartItems,
    addItems: addItemHandler,
  };
  return (
    <CartContext.Provider value={cartData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
