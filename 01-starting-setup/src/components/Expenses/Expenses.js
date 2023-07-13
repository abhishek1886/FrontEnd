import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expenseItems = [];
  if (props.items != 0) {
    for (let i = 0; i < props.items.length; i++) {
      const expense = props.items[i];

      expenseItems.push(
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          itemId={expense.id}
        />
      );
    }
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      {expenseItems}
    </Card>
  );
}

export default Expenses;
