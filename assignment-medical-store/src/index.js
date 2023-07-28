import ReactDOM from "react-dom/client";

import { ProductContextProvider } from "./store/products-ctx";

import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { CartContextProvider } from "./store/cart-ctx";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </ProductContextProvider>
);
