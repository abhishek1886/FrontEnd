import React, { useState } from 'react';

const ExpenseForm = () => {

  const display = () => {
    console.log(document.getElementById('title').value);
    console.log(document.getElementById('amount').value);
    console.log(document.getElementById('date').value);
  }

  return (
    <div>
      <div>
        <label>Expense title: </label>
        <input id='title' />
      </div>
      <div>
        <label>Expense Amount: </label>
        <input type = "number" id='amount'  />
      </div>
      <div>
        <label>Expense Date: </label>
        <input type = "date" id='date' />
      </div>
      <button onClick={display}> Submit </button>
    </div>
  );
}

export default ExpenseForm;