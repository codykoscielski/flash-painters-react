import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
    <Navbar bg="dark" expand="sm" variant="dark" sticky="top" collapseOnSelect>
      <Container>
        <Navbar.Brand >
          Logo
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="m-auto">
            <Link to="/" className="links"><Nav.Link>Home</Nav.Link></Link>
            <Link to="/" className="links"><Nav.Link>Market</Nav.Link></Link>
            <Link to="/" className="links"><Nav.Link>Splits</Nav.Link></Link>
            <Link to="/" className="links"><Nav.Link>Contact Us</Nav.Link></Link>
          </Nav>
          <Nav>
            <Button variant="primary">Log In</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navigation;