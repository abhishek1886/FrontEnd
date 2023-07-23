import React from "react";

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button type={props.type ? props.type : "button"} className="button" >{props.children}</button>
  );
};

export default Button;
