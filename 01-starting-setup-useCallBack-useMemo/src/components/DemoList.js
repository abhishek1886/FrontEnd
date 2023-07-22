import React, { useMemo, useState } from "react";

import classes from "./DemoList.module.css";
import Button from "./UI/Button/Button";

const DemoList = (props) => {
  const { items } = props;
  const [itemOrder, setItemOrder] = useState(items);
  const [buttonTitle, setButtonTitle] = useState("Change to Descending Order");

  useMemo(() => {
    console.log("items sorted");
    console.log(items);
    return setItemOrder([...items].sort((a, b) => a - b));
  }, [items]);

  console.log("DemoList RUNNING!");

  const decendingButtonHandler = (e) => {
    if (buttonTitle === "Change to Descending Order") {
      setItemOrder(itemOrder.sort((a, b) => b - a));
      setButtonTitle("Change to Ascending Order");
    } else {
      setItemOrder(itemOrder.sort((a, b) => a - b));
      setButtonTitle("Change to Descending Order");
    }
  };

  return (
    <div className={classes.list}>
      <h2 className={classes.title}>{props.title}</h2>
      <Button onClick={decendingButtonHandler}>{buttonTitle}</Button>
      {console.log("jsx is being rerendered!")}
      <ul>
        {itemOrder.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
