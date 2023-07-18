import React, { useState } from 'react';

import FormInput from './Components/FormInput';
import Products from './Components/Products';

function App() {
  const [prodcutsData, setProductData] = useState([]);

  const productDataHandler = (product) => {
    setProductData(prevData => {
      return [...prevData, product]
    })
  }

  return <React.Fragment>
    <FormInput onSubmit={productDataHandler} />
    <Products productsData={prodcutsData}  />
  </React.Fragment>
}

export default App;
