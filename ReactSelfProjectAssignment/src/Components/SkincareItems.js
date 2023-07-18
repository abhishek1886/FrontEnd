import React, { useState, useEffect } from "react";

import classes from './Products.module.css'

const SkincareItems = (props) => {
  const [displayData, setDisplayData] = useState(props.productsData);

  useEffect(() => {
    setDisplayData(props.productsData);

    for (let product of props.productsData) {
      localStorage.setItem(product.id, JSON.stringify(product));
    }
  }, [props.productsData]);

  const deleteItemHandler = (id) => {
    localStorage.removeItem(id);

    setDisplayData((prevData) => {
      console.log(prevData);
      const updatedData = prevData.filter((data) => data.id !== id);
      console.log(updatedData);
      return updatedData;
    });
  };
  return (
    <div className={classes.container}>
      <h2>Electronics Items</h2>
      <ul>
        {displayData.map((product) => {
          return (
            <li key={product.id}>
              {`${product.price} - ${product.category} - ${product.description}`}{" "}
              <button onClick={() => deleteItemHandler(product.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkincareItems;
