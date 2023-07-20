import React, { useState, useContext } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const [mealInput, setMealInput] = useState(1);
  const cartCtx = useContext(CartContext);

  const mealInputhandler = (e) => {
    const inputQuantity = Number(e.target.value);
    setMealInput(inputQuantity);
  };

  const addMealHandler = (e) => {
    e.preventDefault();

    cartCtx.addItem({...props.item, quantity: mealInput});
  }

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        onChange={mealInputhandler}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="button" onClick={addMealHandler} >+Add</button>
    </form>
  );
};

export default MealItemForm;
