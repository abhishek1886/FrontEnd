import React, { useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const total = cartCtx.tshirtCartData.reduce((total, tshirt) => {
    return total + tshirt.sQuantity + tshirt.mQuantity + tshirt.lQuantity;
  }, 0);

  console.log(cartCtx.tshirtCartData);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default HeaderCartButton;
