import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";

import classes from "./AuthForm.module.css";
import AuthContext from "./auth-context";

const key = "AIzaSyCbYbxqcehfNw4YLqLt4SVHVjW-4cLnlsY";

const AuthForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const formInputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleAutoLogOut = () => {
    localStorage.removeItem('key');
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const inputData = {
      ...formData,
      returnSecureToken: true,
    };

    setisLoading(true);
    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify(inputData),
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setisLoading(false);

        if (response.ok) {
          return response.json();
          
        } else {
          return response.json().then((data) => {
            let errorMsg = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMsg = data.error.message;
            // }
            throw new Error(errorMsg);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace('/');
        localStorage.setItem('key', data.idToken);
        setTimeout(() => {
          handleAutoLogOut();
        }, 300000);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            required
            onChange={formInputHandler}
            name="email"
            value={formData.value}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={formInputHandler}
            name="password"
            value={formData.value}
          />
        </div>
        <div className={classes.actions}>
          {isLoading && <p>Sending request...</p>}
          {!isLoading && (
            <button type="Submit">{isLogin ? "Log In" : "Sign Up"}</button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
