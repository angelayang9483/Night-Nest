import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export function MyNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/history#history">History</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/explore#explore">Explore</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function Home() {
    return (
        <>
        <h1>Home</h1>
        </>
    )
}

export default Home