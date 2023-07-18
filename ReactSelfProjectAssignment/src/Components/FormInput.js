import React, { useState } from "react";

import classes from "./FormInput.module.css";

const FormInput = (props) => {
  const [enteredID, setEnteredID] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("electronics");

  const inputIdHandler = (e) => {
    setEnteredID(e.target.value);
  };

  const inputPriceHandler = (e) => {
    setEnteredPrice(e.target.value);
  };

  const inputNameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const inputCategoryHandler = (e) => {
    setEnteredCategory(e.target.value);
  };

  const dataInputHandler = (e) => {
    e.preventDefault();

    const productData = {
      price: enteredPrice,
      description: enteredName,
      category: enteredCategory,
      id: enteredID,
    };

    props.onSubmit(productData);
    setEnteredID("");
    setEnteredName("");
    setEnteredPrice("");
    setEnteredCategory("electronics");
  };
  return (
    
      <form onSubmit={dataInputHandler} className={classes.page}>
        <div className={classes.formControl}>
          <div className={classes.inputControl}>
            <label>Product ID: </label>
            <input onChange={inputIdHandler} value={enteredID} />
          </div>
          <div className={classes.inputControl}>
            <label>Selling Price: </label>
            <input onChange={inputPriceHandler} value={enteredPrice} />
          </div>
          <div className={classes.inputControl}>
            <label>Product Name: </label>
            <input onChange={inputNameHandler} value={enteredName} />
          </div>
          <div className={classes.inputControl}>
            <label>Choose a category: </label>
            <select onChange={inputCategoryHandler} value={enteredCategory}>
              <option value="electronics">Electronics</option>
              <option value="skincareItem">Skincare Item</option>
              <option value="foodItems">Food Item</option>
            </select>
          </div>
          <button type="Submit">Add Product</button>
        </div>
      </form>
    
  );
};

export default FormInput;
