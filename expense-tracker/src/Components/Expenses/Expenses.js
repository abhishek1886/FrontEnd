import React, { useState, useEffect } from "react";

import axios from "axios";

import { Container, Card, ListGroup, Form } from "react-bootstrap";
import ExpenseInput from "../Layout/Input/ExpenseInput";
import ExpenseItem from "./ExpenseItem";

const expense = axios.create({
  baseURL: "https://expense-tracker-d9bd4-default-rtdb.firebaseio.com/expenses",
});
const email = localStorage.getItem("email").replace(/[@.]/g, "");

const Expenses = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [filter, setFilter] = useState("all");

  const formInputData = async (inputData) => {
    try {
      console.log(inputData);

      const response = await expense.post(`/${email}.json`, {
        ...inputData,
      });

      const updatedData = { ...inputData, _id: response.data.name };
      setExpenseData((prevData) => [updatedData, ...prevData]);
      setOriginalData((prevData) => [updatedData, ...prevData]);
    } catch (err) {
      alert(err.message);
    }
  };

  let listItems;

  if (expenseData.length > 0) {
    listItems = expenseData.map((item) => (
      <ExpenseItem
        date={item.date}
        amount={item.amount}
        description={item.description}
        category={item.category}
        key={item.id}
        id={item.id}
      />
    ));
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await expense.get(`/${email}.json`).catch((err) => {
        alert(err.message);
      });

      let storedData = [];
      if (response.data) {
        storedData = Object.values(response.data).reverse();
      }

      setExpenseData(storedData);
      setOriginalData(storedData);
    };
    fetchData();
  }, []);

  const selectFilterHandler = (e) => {
    console.log(e.target.value);
    const selectedFilter = e.target.value;
    if (selectedFilter === "all") {
      setExpenseData(originalData);
      setFilter(selectedFilter);
    } else {
      setFilter(selectedFilter);
      const filtereditems = originalData.filter(item => item.category === selectedFilter);
      setExpenseData(filtereditems);
    }
  };

  return (
    <React.Fragment>
      <Container
        className="mt-5 mb-2 mr-auto ml-auto"
        style={{ maxWidth: "500px", marginTop: "50px" }}
      >
        <Card className="shadow p-3 bg-secondary bg-gradient">
          <ExpenseInput onSubmit={formInputData} />
        </Card>
      </Container>

      <Container className="mt-4 mb-5" style={{ maxWidth: "500px" }}>
        <Card className="shadow p-3 bg-secondary bg-gradient">
          <div className="d-flex justify-content-between">
            <p>Filter</p>
            <Form.Select
              size="sm"
              className="bg-black fw-bold text-white border-info rounded-4"
              style={{ width: "5rem", fontSize: "10px", height: "25px" }}
              onChange={selectFilterHandler}
              value={filter}
            >
              <option value="all">All</option>
              <option value="Food">Food</option>
              <option value="Skincare">Skincare</option>
              <option value="Movies">Movies</option>
              <option value="Clothes">Clothes</option>
              <option value="Groceries">Groceries</option>
              <option value="Misc">Miscellaneous</option>
            </Form.Select>
          </div>

          {expenseData.length === 0 && (
            <p className="text-center">No Expense data. Add expenses.</p>
          )}
          <ListGroup as="ol" className="rounded-4">
            {listItems}
          </ListGroup>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Expenses;
