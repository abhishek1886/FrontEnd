import React, { useContext, useState, useEffect } from "react";

import { Navbar, Container, Button } from "react-bootstrap";
import AuthContext from "../auth/auth-context";

const key = "AIzaSyCnYaoFCa20-m3PKXmlMEhGvLDqPbJ0TzA";
const Header = () => {
  const authCtx = useContext(AuthContext);
  const [isVerified, setIsVerified] = useState(false);
  // const [isVerified, setIsVerified] = useState(false);

  // useEffect(() => {
  //   fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${key}`, {

  //   })
  // }, []);

  
  const verifyUserHandler = async () => {
    try {
      const payload = {
        requestType: "VERIFY_EMAIL",
        idToken: authCtx.token
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
      if(!res.ok){
        const data = await res.json();
        console.log(data.error.message);
        throw new Error();
      }
      setIsVerified(true);
    } catch (err) {}
  };
  return (
    <header>
      <Navbar bg="black" variant="dark" expand="sm" className="mb-3">
        <Container>
          <Navbar.Brand>Expense Tracker</Navbar.Brand>
          {authCtx.isLoggedIn && !isVerified && (
            <Button variant="outline-secondary" onClick={verifyUserHandler}>
              Verify User
            </Button>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
