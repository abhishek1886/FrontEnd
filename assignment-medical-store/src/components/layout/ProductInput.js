import React, { useState, useContext } from "react";

import { Container, Card, Form, Button } from "react-bootstrap";
import ProductContext from "../../store/products-ctx";

const ProductInput = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  const productCtx = useContext(ProductContext);

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

      const productData = {
        ...formData,
        quantity: Number(formData.quantity),
      };

      const res = await fetch(
        "https://crudcrud.com/api/17d9e77c10934becb72636a6422d4b11/products",
        {
          method: "POST",
          body: JSON.stringify(productData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      productCtx.addProduct(data);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Container className="m-5" style={{maxWidth: '500px'}} >
      <Card className="p-2" >
        <Form onSubmit={submitHandler}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={formInputHandler}
            name="name"
            value={formData.name}
            required
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            onChange={formInputHandler}
            name="description"
            value={formData.description}
            required
          />
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            onChange={formInputHandler}
            name="price"
            value={formData.price}
            required
          />
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            onChange={formInputHandler}
            name="quantity"
            value={formData.quantity}
            required
          />
          <div className="text-center my-2">
            <Button type="submit">Add product</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default ProductInput;
