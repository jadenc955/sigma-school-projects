import { Container } from "react-bootstrap";

export default function Profile() {
  return (
    <Container>
      <h1 className="my-3">Profile</h1>
      <p><b>Name:</b> Jaden</p>
      <p><b>Tech stack:</b> HTML, CSS, JavaScript, React</p>
      <p><b>To learn:</b> Back end development {"(Node, Express, SQL, NoSQL)"}</p>
    </Container>
  );
}
