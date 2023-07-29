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
          key={product._id}
          id={product._id}
          price={product.price}
        />
      );
    });
  }

  useEffect(() => {
    if (productCtx.products.length === 0 && !productCtx.isDataFetched ) {
      
      fetch(
        "https://crudcrud.com/api/17d9e77c10934becb72636a6422d4b11/products"
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
            console.log(element);
            productCtx.setIsDataFetched();
            productCtx.addProduct(element);
          });
        })
        .catch((err) => {
          alert(err.message);
        });
      //cartCtx.addItems
      // (async () => {
      //   try {
      //     const response = await fetch(
      //       "https://crudcrud.com/api/17d9e77c10934becb72636a6422d4b11/products"
      //     );
      //     if (!response.ok) {
      //       throw new Error("Something went wrong");
      //     }
      //     const data = await response.json();
      //     data.forEach((element) => {
      //       console.log(element);
      //       productCtx.addProduct(element);
      //     });
      //     productCtx.setIsDataFetched(); // Move this line inside the try block
      //   } catch (err) {
      //     alert(err.message);
      //   }
      // });
    }
  }, [])

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
