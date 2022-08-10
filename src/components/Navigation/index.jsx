import React from 'react'
// import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png'

const Navigation = () => {

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
          <img
              alt="logo"
              src={logo}
              width="150"
              height="75"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="home-link" href="/">Home</Nav.Link>
              <Nav.Link className="login-link" href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;
