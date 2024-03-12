import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { removeToken } from "./userSlice";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddTransaction from "./pages/AddTransaction";
import RequireAuth from "./components/RequireAuth";

function Layout() {
  const userToken = useSelector((state) => state.user.userToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [darkTheme, setDarkTheme] = useLocalStorage("darkTheme", false);

  useEffect(() => {
    if (darkTheme) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [darkTheme]);

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
            <Button onClick={() => setDarkTheme(!darkTheme)} className="ms-3">
              Set {darkTheme ? "Light" : "Dark"} Theme
            </Button>
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
