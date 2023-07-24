import React, { useContext } from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Items from "../Items/Items";

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

const AvailableItems = () => {
  const itemsData = productsArr.map((item) => (
    <Items
      key={item.imageUrl}
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
    />
  ));
  return (
    <React.Fragment>
      <Container className="mt-3">
        <h1 className="text-center py-3 fw-bold">Music</h1>
        <Container className="text-center">
          <Row>{itemsData}</Row>
        </Container>
      </Container>
      <Container className="text-center my-4">
        <Button className="btn-secondary text-info fw-bold ">
          See the Cart
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default AvailableItems;
