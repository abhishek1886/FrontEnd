import React, { useContext, useEffect } from "react";

import { Modal, Table } from "react-bootstrap";
import CartContext from "../../store/cart-ctx";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx.items);
  const cartItems = cartCtx.items.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>x{item.quantity}</td>
      </tr>
    );
  });

  useEffect(() => {
    if (cartCtx.items.length === 0 && !cartCtx.isDataFetched ) {
      cartCtx.setIsDataFetched();
      fetch(
        "https://crudcrud.com/api/17d9e77c10934becb72636a6422d4b11/cart"
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json.then((data) => {
              throw new Error("something went wrong");
            });
          }
        })
        .then((data) => {
          data.forEach((element) => {
            cartCtx.addItems(element);
          });
        })
        .catch((err) => {
          alert(err.message);
        });
      //cartCtx.addItems
    }
  }, []);

  return (
    <Modal show={props.show} onHide={props.hide}>
      <Modal.Header closeButton>Cart</Modal.Header>
      <Modal.Body>
        <Table borderless>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{cartItems}</tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
};

export default Cart;
