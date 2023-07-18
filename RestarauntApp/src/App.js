import React from "react";

import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealsSummary";
import AvailableMeals from "./Components/Meals/AvailableMeals";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
}

export default App;
