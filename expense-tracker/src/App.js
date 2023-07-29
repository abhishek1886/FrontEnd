import React, { useContext, useEffect } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import SignUp from "./Components/Layout/Input/SignUp";
import Login from "./Components/Layout/Input/LogIn";
import Header from "./Components/Layout/Header";
import Home from "./Components/Layout/Home";
import AuthContext from "./Components/auth/auth-context";
import Profile from "./Components/Layout/Input/Profile";

const App = () => {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("key");
    if (token) {
      authCtx.login(token);
    }
  }, []);
  
  return (
    <React.Fragment>
      <Header />

      <main>
        <Switch>
          <Route path="/" exact>
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            {authCtx.isLoggedIn && <Home />}
            {!authCtx.isLoggedIn && <Redirect to="/" />}
          </Route>
          {authCtx.isLoggedIn && (
            <Route path="/profile">
              <Profile />
            </Route>
          )}
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
