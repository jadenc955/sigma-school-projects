import { Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../feature/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs={4} md={2}>
            <Card.Img
              variant="top"
              src={`https://picsum.photos/id/${item.id}/200`}
              alt={item.name}
            />
          </Col>
          <Col xs={8} md={6}>
            <Card.Title>
              {item.amount} X {item.name}
            </Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <a
              className="add fw-bold"
              onClick={() => dispatch(increment(item))}
            >
              +
            </a>
            <span className="amount">{item.amount}</span>
            <a
              className="minus fw-bold"
              onClick={() => dispatch(decrement(item))}
            >
              -
            </a>
            <span className="fw-bold ms-3 itemprice">
              RM{parseInt(item.price.substring(2)) * item.amount}
            </span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
