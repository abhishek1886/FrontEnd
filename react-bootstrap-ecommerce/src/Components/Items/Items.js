import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Col, Row, Container, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const Items = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = () => {
    cartCtx.addItems(props);
  };

  return (
    <Col className="col-6 md-12 g-5" key={props.imageUrl}>
      <h3 className="py-3">{props.title}</h3>
      <Container>
        <Link to={`products/${props.id}`}>
          <img src={props.imageUrl} alt={props.title} />
        </Link>
      </Container>
      <Container className="d-flex justify-content-around align-propss-center my-2">
        <span>${props.price}</span>
        <Button
          type="button"
          className="btn-info fw-bold text-white rounded-1"
          onClick={addItemHandler}
        >
          ADD TO CART
        </Button>
      </Container>
    </Col>
  );
};

export default Items;
