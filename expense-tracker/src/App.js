import React, { useContext } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import SignUp from "./Components/Layout/SignUp";
import Login from "./Components/Layout/LogIn";
import Header from "./Components/Layout/Header";
import Home from "./Components/Layout/Home";
import AuthContext from "./Components/auth/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);
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
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
