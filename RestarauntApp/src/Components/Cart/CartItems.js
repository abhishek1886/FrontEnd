import React, { useContext } from "react";

import classes from './CartItems.module.css';
import CartContext from "../../store/cart-context";

const CartItems = (props) => {
  const cartCtx = useContext(CartContext);

  const mergedCartItems = cartCtx.items.reduce((result, item) => {
    const existingItem = result.find((i) => i.id === item.id);
    if (existingItem) {
      result.quantity = result.quantity + item.quantity;
    } else {
      result.push(item);
    }
    return result;
  }, []);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {mergedCartItems.map((item) => (
        <li key={item.id}>
          <div>
            <h3>{item.name}</h3>
            <div className={classes.quantity}>{item.price}</div>
          </div>
          <div>x{item.quantity}</div>
          <div>
            <button type="button">-</button>
            <button type="button">+</button>
          </div>
        </li>
      ))}
    </ul>
  );

  return cartItems;

};

export default CartItems;
