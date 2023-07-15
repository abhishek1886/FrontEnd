import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className={`button ${props.setIsEmpty ? 'invlid' : ''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
