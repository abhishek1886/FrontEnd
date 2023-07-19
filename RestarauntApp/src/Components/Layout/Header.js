import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onCartClick} />
      </header>
      <div className={classes['main-image']}>
        <img src="meals.jpg" alt="A picture of food"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
