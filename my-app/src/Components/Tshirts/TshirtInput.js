import React, { useState, useContext } from "react";

import classes from "./TshirtInput.module.css";
import AvailableTshirtsContext from "../store/availableTshirt-context";

const TshirtInput = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [priceInput, setPrieInput] = useState("");
  const [sSizeInput, setSSizeInput] = useState("");
  const [mSizeInput, setMSizeInput] = useState("");
  const [lSizeInput, setLSizeInput] = useState("");

  const availableTshirtCtx = useContext(AvailableTshirtsContext);

  const nameInputHandler = (e) => {
    setNameInput(e.target.value);
  };
  const descriptionInputHandler = (e) => {
    setDescriptionInput(e.target.value);
  };
  const priceInputHandler = (e) => {
    setPrieInput(e.target.value);
  };
  const sSizeInputHandler = (e) => {
    const sSize = Number(e.target.value);
    setSSizeInput(sSize);
  };
  const mSizeInputHandler = (e) => {
    const mSize = Number(e.target.value);
    setMSizeInput(mSize);
  };
  const lSizeInputHandler = (e) => {
    const lSize = Number(e.target.value)
    setLSizeInput(lSize);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const productData = {
      name: nameInput,
      description: descriptionInput,
      price: priceInput,
      sQuantity: sSizeInput,
      mQuantity: mSizeInput,
      lQuantity: lSizeInput,
      id: Math.random().toString()
    };

    availableTshirtCtx.addTshirt(productData);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.name}>
        <label htmlFor="name">Tshirt Name: </label>
        <input type="text" id="name" onChange={nameInputHandler} />
      </div>
      <div className={classes.des}>
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          onChange={descriptionInputHandler}
        />
      </div>
      <div className={classes.price}>
        <label htmlFor="price">Price: </label>
        <input type="number" id="price" onChange={priceInputHandler} />
      </div>
      <div className={classes.quantity}>
        <label htmlFor="s">S:</label>
        <input type="number" id="s" onChange={sSizeInputHandler} />
        <label htmlFor="m">M:</label>
        <input type="number" id="m" onChange={mSizeInputHandler} />
        <label htmlFor="l">L:</label>
        <input type="number" id="l" onChange={lSizeInputHandler} />
      </div>
      <div className={classes.button}>
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
};

export default TshirtInput;
