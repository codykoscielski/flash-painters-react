import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../../contexts/AuthContext';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png'


const Navigation = () => {

  const { currentUser } = useAuth();

  return (
    <Navbar bg="dark" expand="sm" variant="dark" sticky="top" collapseOnSelect>
      <Container>
        <Link to="/" className="links">
          <Navbar.Brand >
            <img src={ Logo } alt="Flash Sheet Sellers Logo" height={ 50 }/>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="m-auto">
            <Link to="/" className="nav-link mx-3">Home</Link>
            <Link to="/market" className="nav-link mx-3">Market</Link>
            <Link to="/contact" className="nav-link mx-3">Contact Us</Link>
          </Nav>
          <Nav>
            { currentUser ? <Link to="/userportal" className="btn btn-primary">Profile</Link> : <Link to="/login" className="btn btn-primary">Log In</Link> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;