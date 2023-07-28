import React from 'react';

import Header from "./components/layout/header";
import ProductInput from './components/layout/ProductInput';
import AvailableProducts from './components/layout/AvailableProducts';

function App() {
  return (
    <React.Fragment>
      <Header />
      <ProductInput />
      <AvailableProducts />
    </React.Fragment>
  );
}

export default App;
