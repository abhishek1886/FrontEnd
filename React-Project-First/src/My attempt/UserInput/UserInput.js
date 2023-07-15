import React, { useState } from "react";

import "./UserInput.css";
import InvalidWindow from "../ItemsList/InvalidWindow";

const UserInput = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [isValid, setIsValid] = useState(true);

  const checkValidity = (inputData) => {
    if (inputData.trim().length === 0){
      setIsValid(false);
    }
  }

  const inputNameChange = (e) => {
    setUserName(e.target.value)
    checkValidity(e.target.value);
  };

  const inputAgeChange = (e) => {
    setUserAge(e.target.value);
    checkValidity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let userData = {
      name: userName,
      age: userAge,
      id: Math.random().toString(),
      isValid: isValid
    };

    console.log(userData);
    props.onSubmit(userData);
  };

  return (
    <div className="userInput">
      <form className="form-control">
        <label>User Name</label>
        <input type="text" onChange={inputNameChange} />
        <label >User Age</label>
        <input type="number" onChange={inputAgeChange} />
        <button type="button" className="button" onClick={submitHandler}>
          Add User
        </button>
        
      </form>
    </div>
  );
};

export default UserInput;
