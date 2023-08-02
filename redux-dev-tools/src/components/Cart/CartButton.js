import { useDispatch, useSelector } from "react-redux";

import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalCartItem = useSelector((state) =>
    state.cart.cartItems.length > 0
      ? state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
      : 0
  );

  const cartButtonHandler = () => {
    dispatch(uiActions.cartActiveState());
  };
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItem}</span>
    </button>
  );
};

export default CartButton;
