import React from "react";

import classes from "./CartItems.module.css";

const CartItems = (props) => {
  return (
    <ul className={classes["cart-items"]}>
      {props.tshirts.map((tshirt) => (
        <li className={classes["cart-item"]} key={tshirt.id}>
          <div>
            <h3>{tshirt.name}</h3>
            <div className={classes.summary}>
              <div className={classes.price}>${tshirt.price}</div>
              <div className={classes.quantity}>
                <span>{`S x ${tshirt.sQuantity}`}</span>
                <span>{`M x ${tshirt.mQuantity}`}</span>
                <span>{`L x ${tshirt.lQuantity}`}</span>
              </div>
            </div>
          </div>
          <div className={classes.total}>₹
            {tshirt.sQuantity * tshirt.price +
              tshirt.mQuantity * tshirt.price +
              tshirt.lQuantity * tshirt.price}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
