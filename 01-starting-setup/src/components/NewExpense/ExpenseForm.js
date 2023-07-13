import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // })
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // })

    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount: e.target.value}
    // })
  };

  const dateChangeHandler = (e) => {
    
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // })
  };

  const display = (e) => {
    e.preventDefault();
    let obj = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate
    }
    console.log(obj);
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense_-control">
          <label>Expense title: </label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense_-control">
          <label>Expense Amount: </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense_-control">
          <label>Expense Date: </label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={display}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
