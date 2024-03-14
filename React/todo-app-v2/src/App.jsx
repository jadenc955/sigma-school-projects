import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import AddTodo from "./pages/AddTodo";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import EditTodo from "./pages/EditTodo";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";
import { useSelector, useDispatch } from "react-redux";
import { removeToken } from "./userSlice";
import { useNavigate } from "react-router-dom";

function Layout() {
  const userToken = useSelector((state) => state.user.userToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">Todos for Travellers</Navbar.Brand>
          <Nav className="me-auto">
            {userToken && (
              <>
                <Nav.Link href="/add">Add Todo</Nav.Link>
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
                    <AddTodo />
                  </RequireAuth>
                }
              />
              <Route
                path="todo/:id"
                element={
                  <RequireAuth>
                    <EditTodo />
                  </RequireAuth>
                }
              />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
