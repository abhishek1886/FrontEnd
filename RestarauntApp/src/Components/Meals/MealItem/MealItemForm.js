import React from "react";

import classes from './MealItemForm.module.css'

const MealItemForm = props => {
  return <section className={classes.mealForm}>
    <form>
      <label htmlFor="amount">Amount</label>
      <input id="amount" type="number" />
    </form>
    <button>+Add</button>
  </section>
}

export default MealItemForm;