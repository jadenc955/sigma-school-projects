import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Link, Outlet, Routes, Route } from "react-router-dom";
import { store } from "./store";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./App.css";

export function Layout() {
  const cart = useSelector((state) => state.cart);

  const totalItemsInCart = cart.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            E-Commerce App
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to={"/cart"}>
              <i className="bi bi-cart"></i>
              <Badge pill variant="primary">
                {totalItemsInCart}
              </Badge>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
