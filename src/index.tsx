/* @refresh reload */
import { render } from "solid-js/web";
import { lazy } from "solid-js";
import { Route, Router } from "@solidjs/router";

import "./index.css";
import App from "./App";
import { CartProvider } from "./context/CartContext";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <CartProvider>
      <Router root={App}>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Router>
    </CartProvider>
  ),
  root!,
);
