import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  let items;
  if (cartItems.length > 0) {
    console.log(cartItems);
    items = cartItems.map((item) => {
      const total = item.quantity * item.price;
      
      console.log(total);
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
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{items}</ul>
    </Card>
  );
};

export default Cart;
