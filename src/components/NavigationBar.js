import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-color">
      <Container>
        <Navbar.Brand href="#home">Myro Joy Lee</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="">About Me</Nav.Link>
            <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
              <NavDropdown.Item href="">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="">Project 2</NavDropdown.Item>
              <NavDropdown.Item href="">Project 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="">Contact</Nav.Link>
            <Nav.Link href="">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
