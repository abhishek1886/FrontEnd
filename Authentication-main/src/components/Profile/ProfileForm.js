import { useRef, useContext } from 'react';
import classes from './ProfileForm.module.css';

import AuthContext from '../Auth/auth-context';

const ProfileForm = () => {
  const newPassowrdInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const eneteredNewPassword = newPassowrdInputRef.current.value;
    console.log(eneteredNewPassword);

    //add validation
    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCbYbxqcehfNw4YLqLt4SVHVjW-4cLnlsY`, {
      method: "POST",
      body: JSON.stringify({
        idToken: authCtx.token,
        password: eneteredNewPassword,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
        
    }).catch(err => {console.log(err)})
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password' >New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPassowrdInputRef}/>
      </div>
      <div className={classes.action}>
        <button type='submit'>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
