import React, { useState } from "react";

import Header from "./Components/Layout/Header";
import Items from "./Components/Layout/Items";
import Footer from "./Components/Layout/Footer";


function App() {

  return (
    <React.Fragment>
      <Header />
      <Items />
      <Footer />
    </React.Fragment>
  );
}

export default App;
