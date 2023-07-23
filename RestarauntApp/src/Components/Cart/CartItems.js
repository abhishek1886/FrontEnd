import React, { useContext } from "react";

import classes from "./CartItems.module.css";
import CartContext from "../../store/cart-context";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);

  const removeItemHandler = (e) => {
    cartCtx.removeItem(e.target.id);
  }

  const addItemHandler = (e) => {
    cartCtx.addItem({id: e.target.id, quantity: 1})
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id} className={classes["cart-item"]}>
          <div>
            <h3>{item.name}</h3>
            <div className={classes.summary}>
              <div className={classes.price}>${item.price}</div>
              <div className={classes.quantity}>x{item.quantity}</div>
            </div>
          </div>

          <div>
            <button type="button" onClick={removeItemHandler} id={item.id}>-</button>
            <button type="button" onClick={addItemHandler} id={item.id}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );

  return cartItems;
};

export default CartItems;
