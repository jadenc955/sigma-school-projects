import { Container, Row, Col } from "react-bootstrap";
import Item from "../components/Item";

const items = [
  { id: 1, name: "Dell Laptop", description: "Latest model", price: "RM3500" },
  {
    id: 2,
    name: "Acer Laptop",
    description: "Older generation",
    price: "RM3000",
  },
  { id: 3, name: "iPhone 15", description: "Selling fast", price: "RM5000" },
  { id: 4, name: "Notebook", description: "Basic notebook", price: "RM20" },
];

export default function Home() {
  return (
    <Container>
      <Row>
        {items.map((item) => (
          <Col key={item.id} md={3}>
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
