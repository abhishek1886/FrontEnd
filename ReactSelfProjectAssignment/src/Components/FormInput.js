import React, { useState } from "react";

import classes from './FormInput.module.css'

const FormInput = (props) => {
  const [enteredID, setEnteredID] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('electronics');
  
  const inputIdHandler = (e) => {
    setEnteredID(e.target.value);
  }

  const inputPriceHandler = (e) => {
    setEnteredPrice(e.target.value);
  }

  const inputNameHandler = (e) => {
    setEnteredName(e.target.value);
  }
  const inputCategoryHandler = (e) => {
    setEnteredCategory(e.target.value);
  }

  const dataInputHandler = (e) => {
    e.preventDefault();

    const productData = {
      price: enteredPrice,
      description: enteredName,
      category: enteredCategory,
      id: enteredID
    }

    props.onSubmit(productData);
    setEnteredID('');
    setEnteredName('');
    setEnteredPrice('');
    setEnteredCategory('electronics');
  }
  return (
    <div className={classes.formControl}>
      <form onSubmit={dataInputHandler}>
        <div>
          <label>Product ID: </label>
          <input onChange={inputIdHandler} value={enteredID} />
        </div>
        <div>
          <label>Selling Price: </label>
          <input onChange={inputPriceHandler} value={enteredPrice} />
        </div>
        <div>
          <label>Product Name: </label>
          <input onChange={inputNameHandler} value={enteredName} />
        </div>
        <div>
          <label>Choose a category: </label>
          <select onChange={inputCategoryHandler} value={enteredCategory}>
            <option value="electronics">Electronics</option>
            <option value="skincareItem">Skincare Item</option>
            <option value="foodItems">Food Item</option>
          </select>
        </div>
        <button type="Submit">Add Product</button>
      </form>
    </div>
  );
};

export default FormInput;
