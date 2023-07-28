import React, { useState, useContext } from "react";

import { Navbar, Nav, Button, Container } from "react-bootstrap";
import Cart from "./Cart";
import CartContext from "../../store/cart-ctx";

const Header = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const cartCtx = useContext(CartContext)

  const cartDisplayHandler = () => {
    setCartIsOpen(true);
  }
  const cartHide = () => {setCartIsOpen(false)}

  const total = cartCtx.items.reduce((total, item) => (total+item.quantity), 0)
  return (
    <header>
      {cartIsOpen && <Cart show={cartIsOpen} hide={cartHide} />}
      <Navbar expand="sm" variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#">Medical Store</Navbar.Brand>
      </Container>
      <Button onClick={cartDisplayHandler}>Cart</Button>
      <p className="text-white fw-bold">{total}</p>
    </Navbar>
    </header>
  );
};

export default Header;
