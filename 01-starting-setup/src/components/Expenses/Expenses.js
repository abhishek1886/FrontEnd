import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [selectedYear, setFilteredYear] = useState("2020");
  const [expenses, setFilteredExpenses] = useState(props.items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    //filter the array according to the entered year
    const filterdArray = props.items.filter((item) => {
      return item.date.getFullYear() === parseInt(selectedYear);
    });

    //now send the filterd array via state to be displayed
    setFilteredExpenses(filterdArray);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>

      {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
