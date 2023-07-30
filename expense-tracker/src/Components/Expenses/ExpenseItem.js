import React from "react";

import { ListGroup, Badge } from 'react-bootstrap';

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ExpenseItem = (props) => {

  const date = new Date(props.date);

  return (
    <ListGroup.Item
      key={props.id}
      id={props.id}
      as="li"
      className="d-flex justify-content-between align-items-center bg-dark text-white mb-1 rounded-4 border-info"
    >
      <div
        className="bg-info px-4 py-1 rounded-4 border-white"
        style={{ width: "90px" }}
      >
        <p className="text-center fs-6 p-0 m-0">
          {monthNames[date.getMonth()]}
        </p>
        <h2 className="text-center m-0t">{date.getDate()}</h2>
        <p className="text-center m-0">{date.getFullYear()}</p>
      </div>

      <h3>{props.description}</h3>
      <div className="text-center">
        <Badge pill bg="success fw-bold">
          ₹{props.amount}
        </Badge>
        <p className="fw-lighter">{props.category}</p>
      </div>
    </ListGroup.Item>
  );
};

export default ExpenseItem;
