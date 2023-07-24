import React from "react";

import { Button, Modal, Table, Form } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  const cartItems = cartElements.map((item) => {
    return (
      <tr className="mb-2">
        <td>
          <img src={item.imageUrl} style={{ width: "75px" }} />
          {item.title}
        </td>
        <td>{item.price}</td>
        <td className="d-flex align-items-center justify-content-center">
          <Form.Control type="text" size="sm" value={item.quantity} style={{width: '2rem'}}/>
          <Button variant="danger" className="btn-sm m-2" >
            Remove
          </Button>
        </td>
      </tr>
    );
  });
  return (
    <Modal show={props.show} onHide={props.onClose} backdrop={false}>
      <Modal.Header closeButton>
        <Modal.Title className="ps-2 fw-bold">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table borderless>
          <thead >
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody >{cartItems}</tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer >
        <h2 className="d-block text-end">Total</h2>
        <Button variant="secondary" className="btn d-block">Purchase</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
