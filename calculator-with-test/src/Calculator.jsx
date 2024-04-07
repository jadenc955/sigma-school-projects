import { useState } from "react";
import { Container, Button, Col, Form, Row } from "react-bootstrap";
import { calculate } from "./calculate";

export default function Calculator() {
  const [state, setState] = useState({
    num1: "",
    num2: "",
    operator: "+",
    result: "",
  });

  const computeResult = () => {
    const result = calculate(state.num1, state.num2, state.operator);
    setState({ ...state, result });
  };

  return (
    <Container>
      <h1 className="my-4">Calculator</h1>
      <Row>
        <Col sm={1}>
          <Form.Control
            value={state.num1}
            onChange={(e) => setState({ ...state, num1: e.target.value })}
            placeholder="First number"
          />
        </Col>
        <Col sm={1}>
          <Form.Control
            as="select"
            value={state.operator}
            onChange={(e) => setState({ ...state, operator: e.target.value })}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </Form.Control>
        </Col>
        <Col sm={1}>
          <Form.Control
            value={state.num2}
            onChange={(e) => setState({ ...state, num2: e.target.value })}
            placeholder="Second number"
          />
        </Col>
        <Col sm={1}>
          <Button onClick={computeResult} variant="light">
            =
          </Button>
        </Col>
        <Col sm={1}>
          <Form.Control readOnly value={state.result} placeholder="Result" />
        </Col>
      </Row>
    </Container>
  );
}
