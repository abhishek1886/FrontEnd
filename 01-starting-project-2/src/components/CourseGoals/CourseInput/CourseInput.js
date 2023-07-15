import React, { useEffect, useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const goalInputChangeHandler = (event) => {
    const enteredValue = event.target.value;
    setEnteredValue(event.target.value);

    if(enteredValue.trim().length > 0) setIsValid(true);
    if(enteredValue.trim().length === 0) setIsEmpty(true);
    else setIsEmpty(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" setIsEmpty={isEmpty} >Add Goal</Button>
    </form>
  );
};

export default CourseInput;
