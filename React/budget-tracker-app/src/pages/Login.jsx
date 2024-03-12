import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, addToken } from "../userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);

  const navigate = useNavigate();

  function signUp() {
    if (!isSignUp) {
      setUsername("");
      setPassword("");
      setIsSignUp(true);
    }

    if (isSignUp) {
      if (!username) {
        alert("Please enter a username");
      } else if (!password) {
        alert("Please enter a password");
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match");
      }

      if (username && password && password === confirmPassword) {
        if (userProfile.findIndex((el) => el.username === username) !== -1) {
          alert("Username already exists.");
        } else {
          dispatch(addUser({ username, password }));
          alert("Sign up successful")
          setUsername("");
          setPassword("");
          setConfirmPassword("");
          setIsSignUp(false);
        }
      }
    }
  }

  function login() {
    if (isSignUp) {
      setIsSignUp(false);
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    }
    if (!isSignUp) {
      if (!username) {
        alert("Please enter username");
      } else if (!password) {
        alert("Please enter password");
      } else {
        const userIndex = userProfile.findIndex(
          (el) => el.username === username
        );
        if (userIndex !== -1 && userProfile[userIndex].password === password) {
          alert("Login successful");
          dispatch(addToken({ username }));
          navigate("/Home");
        } else {
          alert("Incorrect username/password");
        }
      }
    }
  }

  return (
    <Container>
      <h1 className="my-3">{isSignUp ? "Sign Up" : "Login"}</h1>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            required
          />
        </Form.Group>
        {isSignUp && (
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(evt) => setConfirmPassword(evt.target.value)}
              required
            />
          </Form.Group>
        )}

        <Button onClick={login} type="button">
          Login
        </Button>
        <Button className="ms-2" onClick={signUp} type="button">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}
