import React, { useContext, useEffect } from "react";

import { Container, Table, Card } from "react-bootstrap";
import ProductContext from "../../store/products-ctx";
import Product from "./Product";

const AvailableProducts = () => {
  const productCtx = useContext(ProductContext);

  let products;

  if (productCtx.products.length > 0) {
    products = productCtx.products.map((product) => {
      return (
        <Product
          name={product.name}
          description={product.description}
          quantity={product.quantity}
          key={product.id}
          id={product.id}
          price={product.price}
        />
      );
    });
  }

  useEffect(() => {
    if (productCtx.products.length === 0 && !productCtx.isDataFetched ) {
      productCtx.setIsDataFetched();
      fetch(
        "https://crudcrud.com/api/a4194fccc2854f2e94f1060324a5ab35/products"
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
            productCtx.addProduct(element);
          });
        })
        .catch((err) => {
          alert(err.message);
        });
      //cartCtx.addItems
    }
  }, [])

  console.log(products);

  return (
    <Container className="text-center">
      <Card className="p-2">
        {productCtx.products.length === 0 && <p>Add Products</p>}
        <Table>
          <tbody>{products}</tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default AvailableProducts;
