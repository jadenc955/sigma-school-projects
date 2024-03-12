import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector, useDispatch } from "react-redux";
import { removeToken } from "./userSlice";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddTransaction from "./pages/AddTransaction";
import RequireAuth from "./components/RequireAuth";

function Layout() {
  const userToken = useSelector((state) => state.user.userToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">Budget Tracker</Navbar.Brand>
          <Nav className="me-auto">
            {userToken && (
              <>
                <Nav.Link href="/add">Add Transaction</Nav.Link>
                <Nav.Link
                  onClick={() => {
                    dispatch(removeToken());
                    navigate("/");
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Login />} />
              <Route
                path="home"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route
                path="add"
                element={
                  <RequireAuth>
                    <AddTransaction />
                  </RequireAuth>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
