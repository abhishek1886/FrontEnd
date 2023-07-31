import React, { useState, useEffect } from "react";

import axios from "axios";

import { Container, Card, ListGroup, Form, Button } from "react-bootstrap";
import ExpenseInput from "../Layout/Input/ExpenseInput";
import ExpenseItem from "./ExpenseItem";

const expense = axios.create({
  baseURL: "https://expense-tracker-d9bd4-default-rtdb.firebaseio.com/expenses",
});


const Expenses = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [inputOpen, setInputOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [values, setValues] = useState(null);
  
  const email = localStorage.getItem("email").replace(/[@.]/g, "");
  const formInputData = async (inputData) => {
    try {
      if (!isEdit) {
        const response = await expense.post(`/${email}.json`, {
          ...inputData,
        });
        console.log('add');

        const itemId = response.data.name;
        const updatedData = { ...inputData, _id: itemId };
        setExpenseData((prevData) => [updatedData, ...prevData]);
        setOriginalData((prevData) => [updatedData, ...prevData]);
      } else {
        const { _id, ...payload} = inputData;
        const response = await expense.put(`/${email}/${inputData._id}.json`, { ...payload });
        console.log(response);
        console.log('edit');

        const updatedData = originalData.map((item) => (item._id === _id ? inputData : item))
        setExpenseData(updatedData);
        setOriginalData(updatedData);

        setValues(null);
        setIsEdit(false);
        setInputOpen(false);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const deleteButtonHandler = async (id, _id) => {
    const updatedData = originalData.filter((data) => data.id !== id);
    setOriginalData(updatedData);
    setExpenseData(updatedData);

    console.log(`/${email}/${_id}.json`);

    await expense.delete(`/${email}/${_id}.json`).catch((err) => {
      alert(err.message);
    });

    console.log(id);
  };

  const editButtonHandler = (data) => {
    setInputOpen(true);
    setValues(data);
    setIsEdit(true);
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
        _id={item._id}
        onDelete={deleteButtonHandler}
        onEdit={editButtonHandler}
      />
    ));
  }

  useEffect(() => {
    const fetchData = async () => {
      console.log(email);
      const response = await expense.get(`/${email}.json`).catch((err) => {
        alert(err.message);
      });
      console.log(response);
      let storedData = [];
      if (response.data) {
        storedData = Object.entries(response.data)
          .map(([key, value]) => ({
            ...value,
            _id: key,
          }))
          .reverse();
      }

      setExpenseData(storedData);
      setOriginalData(storedData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setExpenseData(expenseData);
    setOriginalData(originalData);
  }, [originalData, expenseData])

  const selectFilterHandler = (e) => {
    console.log(e.target.value);
    const selectedFilter = e.target.value;
    if (selectedFilter === "all") {
      setExpenseData(originalData);
      setFilter(selectedFilter);
    } else {
      setFilter(selectedFilter);
      const filtereditems = originalData.filter(
        (item) => item.category === selectedFilter
      );
      setExpenseData(filtereditems);
    }
  };

  const openInputHandler = () => {
    setInputOpen((prevState) => !prevState);
    setValues(null);
    setIsEdit(false);
  };

  return (
    <React.Fragment>
      <Container
        className="mt-5 mb-2 mr-auto ml-auto"
        style={{ maxWidth: "700px", marginTop: "50px" }}
      >
        <Card className="shadow p-3 bg-secondary bg-gradient">
          {inputOpen && (
            <ExpenseInput
              onSubmit={formInputData}
              onClose={openInputHandler}
              isEdit={isEdit}
              value={values}
            />
          )}
          {!inputOpen && (
            <div className="text-center">
              <Button
                variant="info"
                className="fw-bold px-4 rounded-4"
                onClick={openInputHandler}
              >
                Add Expense
              </Button>
            </div>
          )}
        </Card>
      </Container>

      <Container className="mt-4 mb-5" style={{ maxWidth: "700px" }}>
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
