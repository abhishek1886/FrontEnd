import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Items = () => {
  const itemsData = productsArr.map((item) => {
    return (
      <Col className="col-6 md-12 g-5" key={item.imageUrl}>
        <h3 className="py-3">{item.title}</h3>
        <Container>
          <img src={item.imageUrl} alt={item.title} />
        </Container>
        <Container className="d-flex justify-content-around align-items-center my-2">
          <span>${item.price}</span>
          <Button className="btn-info fw-bold text-white rounded-1">
            ADD TO CART
          </Button>
        </Container>
      </Col>
    );
  });
  return (
    <React.Fragment>
      <Container className="mt-3">
        <h1 className="text-center py-3 fw-bold">Music</h1>
        <Container className="text-center">
          <Row>{itemsData}</Row>
        </Container>
      </Container>
      <Container className="text-center my-4">
        <Button className="btn-secondary text-info fw-bold ">See the Cart</Button>
      </Container>
    </React.Fragment>
  );
};

export default Items;
