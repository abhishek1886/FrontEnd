import { useContext, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./components/Auth/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const key = localStorage.getItem("key");
    if (key) {
      authCtx.login(key);
    }
  }, []);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {authCtx.isLoggIn && <HomePage />}
          {!authCtx.isLoggIn && <AuthPage />}
        </Route>

        {!authCtx.isLoggIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {authCtx.isLoggIn && <UserProfile />}
          {!authCtx.isLoggIn && <Redirect to="/" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
