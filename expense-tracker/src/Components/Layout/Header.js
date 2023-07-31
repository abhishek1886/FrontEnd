import React, { useContext, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { authActions } from "../../store/auth";

const key = "AIzaSyCnYaoFCa20-m3PKXmlMEhGvLDqPbJ0TzA";
const Header = () => {
  const [isVerified, setIsVerified] = useState(false);
  const {isLoggedIn, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  // const [isVerified, setIsVerified] = useState(false);

  // useEffect(() => {
  //   fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${key}`, {

  //   })
  // }, []);

  const verifyUserHandler = async () => {
    try {
      const payload = {
        requestType: "VERIFY_EMAIL",
        idToken: token,
      };
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${key}`,
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        const data = await res.json();
        console.log(data.error.message);
        throw new Error();
      }
      setIsVerified(true);
    } catch (err) {}
  };

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }
  return (
    <header>
      <Navbar bg="black" variant="dark" expand="sm" className="mb-3">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand as={Link} to="/home">Expense Tracker</Navbar.Brand>
          <div className="d-flex gap-1">
            {isLoggedIn && !isVerified && (
              <Button variant="outline-secondary" onClick={verifyUserHandler}>
                Verify User
              </Button>
            )}
            {isLoggedIn && (
              <Button variant="outline-info" onClick={logoutHandler}>
                Logout
              </Button>
            )}
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
