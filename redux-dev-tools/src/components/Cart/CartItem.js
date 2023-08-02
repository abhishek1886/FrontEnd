import { useSelector, useDispatch } from "react-redux";

import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cartReducer";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props;
  const dispatch = useDispatch();

  const addOneItemHandler = () => {
    const paylaod = {
      title: title,
      quantity: quantity,
      price: price,
      id: id,
    };
    dispatch(cartActions.addItems(paylaod));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItems(props.id));
  };

  console.log(total, price);

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addOneItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
