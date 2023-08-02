import { useDispatch } from 'react-redux';

import classes from './CartButton.module.css';
import { cartActions } from '../../store/cartReducer';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartButtonHandler = () => {
    dispatch(cartActions.cartActiveState());
  }
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
