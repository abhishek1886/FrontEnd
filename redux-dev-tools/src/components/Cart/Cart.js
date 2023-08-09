import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { cartActions } from "../../store/cartReducer";
import { uiActions } from "../../store/ui-slice";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  let items;
  if (cartItems.length > 0) {
    items = cartItems.map((item) => {
      const total = item.quantity * item.price;

      return (
        <CartItem
          key={item.id}
          title={item.title}
          quantity={item.quantity}
          total={total}
          price={item.price}
          id={item.id}
        />
      );
    });
  }

  useEffect(() => {
    const fetchCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Fetching!",
          message: "Fetching data...",
        })
      );
      try {
        const res = await fetch(
          "https://react-http-7ab92-default-rtdb.firebaseio.com/cart.json"
        );
        if (!res.ok) {
          throw new Error(res.error.message);
        }

        const data = await res.json();
        dispatch(cartActions.addItems(data.cartItems));

        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Successfully fetched all the cart data.",
          })
        );
      } catch (err) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error",
            message: "Error occured while trying to fetch data.",
          })
        );
      }
    };
    fetchCartData();
  }, []);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{items}</ul>
    </Card>
  );
};

export default Cart;
