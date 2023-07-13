import React, { useState } from 'react';
import Card from '../UI/Card';

const ExpenseForm = () => {

  const display = () => {
    console.log(document.getElementById('title').value);
    console.log(document.getElementById('amount').value);
    console.log(document.getElementById('date').value);
  }

  return (
    <Card className='expenses'>
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
    </Card>
  );
}

export default ExpenseForm;