import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navbarry() {
  return (
    <Navbar expand="lg" className="fixed-top bg-body-tertiary bg-dark bg-gradient text-light p-3">
      <Container>
        <Navbar.Brand href="#home" className="text-light fs-2 fw-bolder ">Chris Gruenhagen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link href="/" className="text-light">AboutMe</Nav.Link>
            <Nav.Link href="/portfolio" className="text-light">Portfolio</Nav.Link>
            <Nav.Link href="/contact" className="text-light">Contact</Nav.Link>
            <Nav.Link href="/resume" className="text-light">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

