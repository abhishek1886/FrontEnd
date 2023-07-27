import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import AuthContext from "../Auth/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggidIn = authCtx.isLoggIn;

  const logoutHandler = () => {
    authCtx.logout();
  }

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggidIn && <li>
            <Link to="/auth">Login</Link>
          </li>}
          {isLoggidIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggidIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
