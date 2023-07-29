import React, { useState } from "react";

const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const userLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    console.log(token);
  }

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('key');
  }

  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };
  
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;