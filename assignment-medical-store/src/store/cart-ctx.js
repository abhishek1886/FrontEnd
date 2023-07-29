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
    setCartItems((prevItems) => {
      // const index = prevItems.findIndex(i => i.id === item.id);
      // const exisitingItem = prevItems[index];
      // let updatedData;
      // if(item){
      //   const updatedItem = {
      //     ...item,
      //     quantity: item.quantity + exisitingItem.quantity
      //   }
      //   updatedData = [...prevItems];
      //   updatedData[index] = updatedItem;
        
      //   fetch(`https://crudcrud.com/api/17d9e77c10934becb72636a6422d4b11/cart/${item.id}`, {
      //     method: "PATCH",
      //     body: JSON.stringify({
      //       [quantity]: item.quantity + exisitingItem.quantity
      //     }),
      //     headers: {
      //       "Content-Type": "application/json"
      //     }
      //   })
      //   .then(res => {return updatedData})
      // } else {

      //   updatedData = [...prevItems, item]
      // }

      

      // return updatedData;
      return [...prevItems, item];
    });
  };

  const setIsDataFetchedHandler = () => {
    setIsDataFetched(true);
  }

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
