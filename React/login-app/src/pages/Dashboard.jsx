import { Container, Row, Col, Card } from "react-bootstrap";

export default function Dashboard() {
  return (
    <Container>
      <h1 className="my-3">Dashboard</h1>
      <Row>
        <Col md={4}>
          <Card className="my-3">
            <Card.Body>
              <Card.Title>Software Sales Performance</Card.Title>
              <Card.Text>Revenue YTD: +88%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
