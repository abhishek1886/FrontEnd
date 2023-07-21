import React, { useContext, useState, useEffect } from "react";

import classes from "./Cart.module.css";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItems from "./CartItems";

const Cart = (props) => {
  const [cartIsEmpty, setCartIsEmpty] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.items.reduce((currTotal, item) => {
    return currTotal + ((item.price) * parseInt(item.quantity));
  }, 0).toFixed(2);

  useEffect(() => {
    if(cartCtx.items.length > 0 ){
      setCartIsEmpty(true);
    }
    else{
      setCartIsEmpty(false);
    }
  }, [cartCtx.items])

  return (
    <Modal onBackdropClick={props.onCartClose}>
      <CartItems displayItems={cartCtx.items} />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCartClose} className={classes["button-alt"]}>
          Close
        </button>
        {cartIsEmpty && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
