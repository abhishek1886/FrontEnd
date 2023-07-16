import React, { useCallback, useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "./Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUserame, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUserame.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title: 'Invalid input',
        message: 'Please entere a valid name and age'
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age'
      });
      return;
    }

    const enteredData = {
      name: enteredUserame,
      age: enteredAge,
      id: Math.random().toString(),
    };

    props.onAddingUser(enteredData);

    setEnteredAge("");
    setEnteredUsername("");
  };

  const errorModalHandler = () => {
    setError();
  }

  const userNameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message= {error.message} onResolve={errorModalHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUserame}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
