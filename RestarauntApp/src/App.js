import React, { useState } from "react";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartClickHandler = () => {
    setIsCartOpen(true);
  }

  return (
    <React.Fragment>
      {isCartOpen && <Cart onCartClose={setIsCartOpen} />}
      <Header onCartClick={cartClickHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
