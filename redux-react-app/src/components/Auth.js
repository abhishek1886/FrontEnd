import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import classes from './Auth.module.css';
import { authActions } from '../store';

const Auth = () => {
  const dispatch = useDispatch();

  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const inputdata = {
      email: inputRef.current.value,
      password: inputRef.current.value
    };
    console.log(inputdata);

    dispatch(authActions.login());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={inputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={inputRef} />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
