import React, { useState, useEffect } from "react";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Container, Card, ListGroup, Form, Button } from "react-bootstrap";
import ExpenseInput from "../Layout/Input/ExpenseInput";
import ExpenseItem from "./ExpenseItem";
import { expenseActions } from "../../store/expenses";

const expense = axios.create({
  baseURL: "https://expense-tracker-d9bd4-default-rtdb.firebaseio.com/expenses",
});

const Expenses = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [inputOpen, setInputOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [values, setValues] = useState(null);

  const reduxData = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  const email = localStorage.getItem("email").replace(/[@.]/g, "");

  const formInputData = async (inputData) => {
    try {
      if (!isEdit) {
        const response = await expense.post(`/${email}.json`, {
          ...inputData,
        });

        const itemId = response.data.name;
        let isPremium = false;
        if(Number(inputData.amount) > 10000) {
          isPremium = true;
        }
        const updatedData = { ...inputData, _id: itemId, isPremium: isPremium};
        setExpenseData((prevData) => [updatedData, ...prevData]);
        dispatch(expenseActions.addExpense(updatedData));
      } else {
        console.log(inputData);
        const { _id, ...payload } = inputData;
        const response = await expense.put(`/${email}/${inputData._id}.json`, {
          ...payload,
        });
        console.log(response);
        console.log("edit");

        const updatedData = reduxData.map((item) =>
          item._id === _id ? inputData : item
        );
        setExpenseData(updatedData);
        dispatch(expenseActions.addEditedExpense(updatedData));

        setValues(null);
        setIsEdit(false);
        setInputOpen(false);
      }
    } catch (err) {
      alert(err.message);
    }
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
        isPremium={item.isPremium}
        onEdit={editButtonHandler}
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
        storedData = Object.entries(response.data)
          .map(([key, value]) => ({
            ...value,
            _id: key,
          }))
          .reverse();
      }

      setExpenseData(storedData);
      storedData.reverse().forEach(data => {
        dispatch(expenseActions.addExpense(data));
      })
    };
    fetchData();
  }, []);

  useEffect(() => {
    setExpenseData(reduxData);
  }, [reduxData]);

  const selectFilterHandler = (e) => {
    const selectedFilter = e.target.value;
    if (selectedFilter === "all") {
      setExpenseData(reduxData);
    } else {
      const filtereditems = reduxData.filter(
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
