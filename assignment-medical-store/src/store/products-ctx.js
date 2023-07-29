import React, { useState } from "react";

const ProductContext = React.createContext({
  products: [],
  addProduct: () => {}
});

export const ProductContextProvider = (props) => {
  const [productData, setProdctData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const addProductHandler = (product) => {
    console.log(product);
    setProdctData((prevData) => {
      const updatedData = [...prevData, product];
      console.log(updatedData);
      return updatedData;
    });
    
  };

  const setIsDataFetchedHandler = () => {
    setIsDataFetched(true);
  }

  const removeItemHandler = (id, enteredQuantity) => {
    setProdctData( (prevData) => {
      const index = prevData.findIndex(i => i._id === id);
      const item = prevData[index];
      console.log(id);
      console.log(enteredQuantity);
      console.log(index);
      console.log(item);
      const updatedItem = {
        ...item,
        quantity: item.quantity - enteredQuantity
      }

      let updatedData = [...prevData];
      updatedData[index] = updatedItem;

      // fetch(`https://crudcrud.com/api/17d9e77c10934becb72636a6422d4b11/product/${id}`, {
      //   method: "PATCH",
      //   body: JSON.stringify({
      //     quantity: item.quantity-enteredQuantity
      //   }),
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
      // });
      
      return updatedData;
    })
  }

  return (
    <ProductContext.Provider
      value={{
        products: productData,
        addProduct: addProductHandler,
        removeItem: removeItemHandler,
        isDataFetched: isDataFetched,
        setIsDataFetched: setIsDataFetchedHandler
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
