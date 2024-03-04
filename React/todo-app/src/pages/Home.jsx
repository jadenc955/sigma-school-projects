import { Container, Card, Badge, Button, Col, Row } from "react-bootstrap";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";

function CardGroup({ todos, handleDelete }) {
  const navigate = useNavigate();
  return todos.map((todo) => {
    const completed = todo.completed;
    const bg = completed ? "success" : "danger";

    // Passes the todo object into the EditTodo component
    function navigateToEdit() {
      navigate("/edit", { state: { todo } });
    }

    return (
      <Col md={6} key={todo.id}>
        <Card className="my-3">
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
            <Badge bg={bg}>{!completed && "Not"} Completed</Badge>
            <Button className="ms-3 p-1" onClick={() => handleDelete(todo.id)}>
              Delete
            </Button>
            <Button className="ms-3 px-2 py-1" onClick={navigateToEdit}>
              Edit
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

export default function Home() {
  const todos = useContext(TodoContext).todos;
  const setTodos = useContext(TodoContext).setTodos;

  //Updates the todo array without the deleted todo object by checking if each array element matches against its id
  function handleDelete(todeleteid) {
    setTodos(todos.filter((tdo) => tdo.id !== todeleteid));
  }

  return (
    <Container>
      <h1 className="my-3">Your todos</h1>
      <Row>
        <CardGroup todos={todos} handleDelete={handleDelete} />
      </Row>
    </Container>
  );
}
