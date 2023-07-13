import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {

  const [isVisible, setIsVisible] = useState(true);
  const [title, setTitle] = useState(props.title);
  const [amount, addAmount] = useState(props.amount)

  //Add $100 to current expense
  const clickHandlerAddAmount = () => {
    addAmount(amount+100);
  }

  //delete the current expense
  const clickHandlerDelete = () => {
    setIsVisible(false);
  };

  //add a title
  const clickHandlerEdit = () => {
    setTitle('Updated!')
  };

  return (
    isVisible && (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          amount={amount}
          title={title}
          location={props.location}
        />
        <div>
          <button style={{background: 'green'}} className="button-item" onClick={clickHandlerAddAmount}>
            +$100
          </button>
          <button style={{background: 'red'}} className="button-item" onClick={clickHandlerDelete}>
            Delete
          </button>
          <button style={{background: 'blue'}} className="button-item" onClick={clickHandlerEdit}>
            Edit Title
          </button>
        </div>
      </Card>
    )
  );
}

export default ExpenseItem;
