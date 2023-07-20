import React, { useState } from "react";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const cartIsShown = () => {
    setCartIsOpen(true);
  }

  const cartIsHidden = () => {
    setCartIsOpen(false);
  }


  return (
    <CartProvider>
      {cartIsOpen && <Cart onCartClose={cartIsHidden} />}
      <Header onCartClick={cartIsShown} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
