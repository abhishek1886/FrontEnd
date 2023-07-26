import React, { useContext } from "react";

import { Button, Modal, Table, Form } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const removeItemHandler = (e) => {
    cartCtx.removeItem(e.target.id);
  }

  const cartItems = cartCtx.items.map((item) => {
    return (
      <tr className="mb-2" key={item.id}>
        <td>
          <img src={item.imageUrl} style={{ width: "75px" }} />
          {item.title}
        </td>
        <td>{item.price}</td>
        <td className="d-flex align-items-center justify-content-center">
          <Form.Control type="text" size="sm" value={item.quantity} onChange={() => {}} style={{width: '2rem'}}/>
          <Button variant="danger" className="btn-sm m-2" onClick={removeItemHandler} id={item.id} >
            Remove
          </Button>
        </td>
      </tr>
    );
  });

  const total = cartCtx.items.reduce((total, item) => (total + item.price), 0)

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
        <h2 className="d-block text-end">${total}</h2>
        <Button variant="secondary" className="btn d-block">Purchase</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
