import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [isVisible, setIsVisible] = useState(true);
  const [amount, addAmount] = useState(props.amount);
  //const [selectedFilterYear, setSelectedFilteredYear] = useState

  //Add $100 to current expense
  const clickHandlerAddAmount = () => {
    addAmount((prevAmount) => parseInt(prevAmount) + 100);
  };

  //delete the current expense
  const clickHandlerDelete = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <li>
        <Card className="expense-item" id={props.itemId}>
          <ExpenseDate date={props.date} />
          <ExpenseDetails amount={amount} title={props.title} />
          <div>
            <button
              style={{ background: "green", borderRadius: "5px" }}
              className="button-item"
              onClick={clickHandlerAddAmount}
            >
              +$100
            </button>
            <button
              style={{ background: "red", borderRadius: "5px" }}
              className="button-item"
              onClick={clickHandlerDelete}
            >
              Delete
            </button>
          </div>
        </Card>
      </li>
    )
  );
}

export default ExpenseItem;
