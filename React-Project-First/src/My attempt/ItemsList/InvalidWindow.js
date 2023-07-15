import React from "react";

import "./InvalidWindow.css";

const InvalidWindow = (props) => {
  return (
    <div className="container">
      <div className="invalid-window">
        <div className="header">Invalid Input</div>
        <div className="body">
          <p>Please enter a valid name and age (non-empty values)</p>
          <button className="invalid-button">Okay</button>
        </div>
      </div>
    </div>
  );
};

export default InvalidWindow;
