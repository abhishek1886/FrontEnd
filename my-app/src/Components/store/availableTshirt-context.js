import React, { useState, useEffect } from "react";

import { CartContextProvider } from "./cart-context";

const AvailableTshirtsContext = React.createContext({
  tshirts: [],
  addTshirt: (tshirt) => {},
  // sButtonActive: null,
  // mButtonActive: null,
  // lButtonActive: null,
});

export const AvailableTshirtsProvider = (props) => {
  // const [sButton, setSButton] = useState(true);
  // const [mButton, setMButton] = useState(true);
  // const [lButton, setLButton] = useState(true);

  const [avialableTshirts, setAvailableTshirts] = useState([]);

  const addTshirtHandler = (tshirt) => {
    setAvailableTshirts((prevItems) => {
      return [...prevItems, tshirt];
    });
  };

  const removeTshirtHandler = (id, size) => {
    setAvailableTshirts((prevItems) => {
      const targetTshirtIndex = prevItems.findIndex((i) => i.id === id);
      const targetTshirt = prevItems[targetTshirtIndex];

      let updatedItem;
      let updatedItemList;
      let flag = 0;

      console.log(targetTshirt.sQuantity);
      if (size === "sQuantity" && targetTshirt.sQuantity > 0) {
        console.log(targetTshirt.sQuantity);
        updatedItem = {
          ...targetTshirt,
          sQuantity: targetTshirt.sQuantity - 1,
        };
        flag = 1;
      }

      if (size === "mQuantity" && targetTshirt.mQuantity > 0) {
        updatedItem = {
          ...targetTshirt,
          mQuantity: targetTshirt.mQuantity - 1,
        };
        flag = 1;
      }

      if (size === "lQuantity" && targetTshirt.lQuantity > 0) {
        updatedItem = {
          ...targetTshirt,
          lQuantity: targetTshirt.lQuantity - 1,
        };
        flag = 1;
      }

      updatedItemList = [...prevItems];
      if (flag === 1) {
        updatedItemList[targetTshirtIndex] = updatedItem;
      }

      // if (size === "sQuantity" && updatedItem.sQuantity === 0) {
      //   setSButton(false);
      // }

      // if (size === "mQuantity" && updatedItem.mQuantity === 0) {
      //   setMButton(false);
      // }

      // if (size === "lQuantity" && updatedItem.lQuantity === 0) {
      //   setLButton(false);
      // }

      return updatedItemList;
    });
  };

  const availableProductData = {
    tshirts: avialableTshirts,
    addTshirt: addTshirtHandler,
    removeTshirt: removeTshirtHandler,
    // sButtonActive: sButton,
    // mButtonActive: mButton,
    // lButtonActive: lButton,
  };
  return (
    <AvailableTshirtsContext.Provider value={availableProductData}>
      <CartContextProvider>{props.children}</CartContextProvider>
    </AvailableTshirtsContext.Provider>
  );
};

export default AvailableTshirtsContext;
