import React, { useContext } from "react";

import classes from "./Tshirt.module.css";
import CartContext from "../store/cart-context";
import AvailableTshirtsContext from "../store/availableTshirt-context";

const Tshirts = (props) => {
  const availableTshirtCtx = useContext(AvailableTshirtsContext);
  const cartCtx = useContext(CartContext);

  const sButtonHandler = (e) => {
    availableTshirtCtx.removeTshirt(e.target.id, "sQuantity");
    console.log(availableTshirtCtx.sButtonActive);
    cartCtx.addItems(
      {
        name: props.name,
        description: props.description,
        id: props.id,
        price: props.price,
      },
      "sQuantity"
    );
  };
  const mButtonHandler = (e) => {
    availableTshirtCtx.removeTshirt(e.target.id, "mQuantity");
    cartCtx.addItems(
      {
        name: props.name,
        description: props.description,
        id: props.id,
        price: props.price,
      },
      "mQuantity"
    );
  };
  const lButtonHandler = (e) => {
    availableTshirtCtx.removeTshirt(e.target.id, "lQuantity");
    cartCtx.addItems(
      {
        name: props.name,
        description: props.description,
        id: props.id,
        price: props.price,
      },
      "lQuantity"
    );
  };

  return (
    <li id={props.id} className={classes.list}>
      <span>
        <h2 className={classes.name}>{props.name}</h2>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>₹{props.price}</div>
      </span>
      <div className={classes.actions}>
        <button
          type="button"
          onClick={sButtonHandler}
          id={props.id}
          // disabled={!availableTshirtCtx.sButtonActive}
        >{`Buy Small (${props.sQuantity})`}</button>
        <button
          type="button"
          onClick={mButtonHandler}
          id={props.id}
          // disabled={!availableTshirtCtx.mButtonActive}
        >{`Buy Medium (${props.mQuantity})`}</button>
        <button
          type="button"
          onClick={lButtonHandler}
          id={props.id}
          // disabled={!availableTshirtCtx.lButtonActive}
        >{`Buy Large (${props.lQuantity})`}</button>
      </div>
    </li>
  );
};

export default Tshirts;
