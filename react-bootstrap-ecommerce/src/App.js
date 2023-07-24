import React, { useState } from "react";

import Header from "./Components/Layout/Header";
import AvailableItems from "./Components/Layout/AvailableItems";
import Footer from "./Components/Layout/Footer";
import { CartContextProvider } from "./store/cart-context";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <AvailableItems />
      <Footer />
    </CartContextProvider>
  );
}

export default App;
