import React, { useState } from 'react';

import './NewExpense.css';

const AddNewExpense = (props) => {
  return <div className="new-expense">
    <button onClick={props.onAddButton}>Add New Expense</button>
  </div>
}

export default AddNewExpense;