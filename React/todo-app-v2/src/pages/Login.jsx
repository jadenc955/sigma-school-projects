import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  function signUp() {
    setIsSignUp(true);
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
    }
  }

  function login() {
    if (isSignUp) {
      setIsSignUp(false);
      setUsername("");
      setPassword("");
      setConfirmPassword("");
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

        <Button onClick={login} type="submit">
          Login
        </Button>
        <Button className="ms-2" onClick={signUp} type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}
