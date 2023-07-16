import React, { useState, useEffect } from "react";

const AuthContex = React.createContext({
  isLoggedIn: null,
  onLogOut: () => {},
  onLogIn: () => {},
});

export const AuthContexProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLogInInfo = localStorage.getItem("isLoggedIn");
    if (storedUserLogInInfo === "1") setIsLoggedIn(true);
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };
  
  return (
    <AuthContex.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogOut: logoutHandler,
        onLogIn: loginHandler,
      }}
    >
      {props.children}
    </AuthContex.Provider>
  );
};

export default AuthContex;
