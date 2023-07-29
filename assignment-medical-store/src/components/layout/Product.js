import React, { useRef, useContext } from "react";

import { Col, Form, Button, Row } from "react-bootstrap";
import CartContext from "../../store/cart-ctx";
import ProductContext from "../../store/products-ctx";

const Product = (props) => {
  const inputRef = useRef();
  const cartCtx = useContext(CartContext);
  const productCtx = useContext(ProductContext);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      const quantity = inputRef.current.value;
      const product = {
        ...props,
        quantity: Number(quantity),
      };
      cartCtx.addItems(product);
      productCtx.removeItem(props.id, quantity);

      await fetch(
        "https://crudcrud.com/api/17d9e77c10934becb72636a6422d4b11/cart",
        {
          method: "POST",
          body: JSON.stringify(product),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <tr className="mb-2" key={props._id}>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>₹{props.price}</td>
        <td>{props.quantity}</td>
        <td>
          <Form.Control
            type="number"
            ref={inputRef}
            style={{ maxWidth: "4rem" }}
          />
        </td>
        <td>
          <Button onClick={submitHandler}>Add</Button>
        </td>
      </tr>
    </>
  );
};

export default Product;
