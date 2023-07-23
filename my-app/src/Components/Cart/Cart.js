import React, { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItems from "./CartItems";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const total = cartCtx.tshirtCartData.reduce((total, tshirt) => {
    return (
      total +
      tshirt.price * (tshirt.sQuantity+tshirt.mQuantity+tshirt.lQuantity)
    );
  }, 0);

  return (
    <Modal onClick={props.onClose}>
      <CartItems tshirts={cartCtx.tshirtCartData} />
      <div className={classes.total}>
        <span>Total</span>
        <span>₹{total}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes.close}>Close</button>
        <button>Place Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
