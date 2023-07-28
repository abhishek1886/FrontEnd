import React, { useState } from "react";

const ProductContext = React.createContext({
  products: [],
  addProduct: () => {}
});

export const ProductContextProvider = (props) => {
  const [productData, setProdctData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const addProductHandler = (product) => {
    setProdctData((prevData) => [...prevData, product]);
  };

  console.log(productData);
  const setIsDataFetchedHandler = () => {
    setIsDataFetched(true);
  }

  const removeItemHandler = (quantity) => {
    const quantity = Number(quantity);
    // setProdctData(prevData = {
    //   current
    // })
  }

  return (
    <ProductContext.Provider
      value={{
        products: productData,
        addProduct: addProductHandler,
        removeItems: removeItemHandler,
        isDataFetched: isDataFetched,
        setIsDataFetched: setIsDataFetchedHandler
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
