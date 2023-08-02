import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { cartActions } from "../../store/cartReducer";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch()
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
      try{
        const res = await fetch("https://react-http-7ab92-default-rtdb.firebaseio.com/cart.json");
        if(!res.ok) {
          throw new Error(res.error.message);
        }

        const data = await res.json();
        dispatch(cartActions.addItems(data.cartItems));
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchCartData();
  }, [])
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{items}</ul>
    </Card>
  );
};

export default Cart;
