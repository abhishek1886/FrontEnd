import React from "react";

import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealsSummary";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <MealsSummary />
    </React.Fragment>
  );
}

export default App;
