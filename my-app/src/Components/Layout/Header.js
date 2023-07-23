import React from 'react';

import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h2>Shoppers Stop for t-shirts</h2>
      <HeaderCartButton onClick={props.onCartClick} />
    </header>
  )
}

export default Header;