import React, { useState } from "react";

import Header from "./Components/Layout/Header";
import TshirtInput from "./Components/Tshirts/TshirtInput";
import AvailableTshirts from "./Components/Tshirts/AvailableTshirts";
import Cart from "./Components/Cart/Cart";
function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const showCartHandler = () => {
    setCartIsOpen(true);
  };

  const hideCartHandler = () => {
    setCartIsOpen(false);
  };
  return (
    <React.Fragment>
      {cartIsOpen && <Cart onClose={hideCartHandler} />}
      <Header onCartClick={showCartHandler} />
      <main>
        <TshirtInput />
        <AvailableTshirts />
      </main>
    </React.Fragment>
  );
}

export default App;
