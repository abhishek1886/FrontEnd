import React, { useState, useContext } from "react";

import { Card, Form, Container, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../auth/auth-context";

const key = "AIzaSyCnYaoFCa20-m3PKXmlMEhGvLDqPbJ0TzA";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const formInputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      const inputData = { ...formData, returnSecureToken: true };
      console.log(inputData);

      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`,
        {
          method: "POST",
          body: JSON.stringify(inputData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("key", data.idToken);
        authCtx.login(data.idToken);
        history.push('/home');
        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        throw new Error("Something went wrong! Try again.");
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Container className="mx-5 mx-auto" style={{ maxWidth: "450px", marginTop: "150px"}}>
      <Card className="p-3 px-4">
        <h2 className="py-3 text-center">Login</h2>
        <Form onSubmit={submitHandler}>
          <Form.Floating className="mb-2">
            <Form.Control
              id="email"
              type="email"
              placeholder="email"
              name="email"
              onChange={formInputHandler}
              value={formData.email}
              required
            />
            <label htmlFor="email">Email</label>
          </Form.Floating>
          <Form.Floating className="mb-2">
            <Form.Control
              id="password"
              type="password"
              placeholder="password"
              name="password"
              onChange={formInputHandler}
              value={formData.password}
              required
            />
            <label htmlFor="password">Password</label>
          </Form.Floating>
          <div className="d-flex flex-column align-items-center justify-content-center gap-2  mt-2">
            <Button type="submit">Login</Button>
            <Link to='/'>
              <Button variant="boder-info">
                Don't have an account? Signup
              </Button>
            </Link>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
