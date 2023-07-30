import React, { useContext, useEffect } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import SignUp from "./Components/Layout/Input/SignUp";
import Login from "./Components/Layout/Input/LogIn";
import Header from "./Components/Layout/Header";
import Home from "./Components/Layout/Home";
import AuthContext from "./Components/auth/auth-context";
import Profile from "./Components/Layout/Input/Profile";
import Expenses from "./Components/Expenses/Expenses";

const App = () => {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const key = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (key && email) {
      authCtx.login({token: key, email: email});
    }
  }, []);

  return (
    <React.Fragment>
      <Header />

      <main>
        <Switch>
          <Route path="/" exact>
            {!authCtx.isLoggedIn && <SignUp />}
            {authCtx.isLoggedIn && <Redirect to='/home' />}
          </Route>
          <Route path="/login">
            {!authCtx.isLoggedIn && <Login />}
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
          {authCtx.isLoggedIn && <Route path='/expenses'>
            <Expenses />
          </Route>}
        </Switch>
      </main>

    </React.Fragment>
  );
};

export default App;
