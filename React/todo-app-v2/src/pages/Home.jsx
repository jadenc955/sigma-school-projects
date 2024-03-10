import { Col, Container, Row } from "react-bootstrap";
import TodoCard from "../components/TodoCard";
import { useSelector } from "react-redux";

export default function Home() {
  const userProfile = useSelector((state) => state.user.userProfile);
  const userToken = useSelector((state) => state.user.userToken);

  const todos = userProfile.find((el) => el.token === userToken).todolist;

  return (
    <Container>
      <h1 className="my-3">Your todos</h1>
      <Row>
        <CardGroup todos={todos} />
      </Row>
    </Container>
  );
}

function CardGroup({ todos }) {
  return todos.map((todo) => {
    return (
      <Col md={4} key={todo.id}>
        <TodoCard todo={todo} />
      </Col>
    );
  });
}
