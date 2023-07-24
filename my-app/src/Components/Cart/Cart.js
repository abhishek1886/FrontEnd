import React, { useContext, useState, useEffect } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItems from "./CartItems";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  const [cartIsempty, setCartIsEmpty] = useState(true);
  const cartCtx = useContext(CartContext);

  const total = cartCtx.tshirtCartData.reduce((total, tshirt) => {
    return (
      total +
      tshirt.price * (tshirt.sQuantity+tshirt.mQuantity+tshirt.lQuantity)
    );
  }, 0);

  useEffect(() => {
    if(cartCtx.tshirtCartData.length > 0) setCartIsEmpty(false);
    else setCartIsEmpty(true);
  }, [cartCtx.tshirtCartData])

  return (
    <Modal onClick={props.onClose}>
      <CartItems tshirts={cartCtx.tshirtCartData} />
      {cartIsempty && <h3>The cart is empty.</h3>}
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
