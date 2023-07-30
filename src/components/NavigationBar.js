import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/NavigationBar.css";

function NavigationBar({ currentPage, handlePageChange }) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-color navbar-wrapper"
    >
      <Navbar.Brand href="#home" className="full-name">
        Myro Joy Lee
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="align-self-end">
        <Nav className="ms-auto" variant="tabs" defaultActiveKey="/aboutme">
          <Nav.Link
            href="#aboutme"
            onClick={() => handlePageChange("AboutMe")}
            className={
              currentPage === "AboutMe"
                ? "nav-link active navbar-gradient"
                : "nav-link navbar-gradient"
            }
          >
            About Me
          </Nav.Link>
          <Nav.Link
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio"
                ? "nav-link active navbar-gradient"
                : "nav-link navbar-gradient"
            }
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact"
                ? "nav-link active navbar-gradient"
                : "nav-link navbar-gradient"
            }
          >
            Contact
          </Nav.Link>
          <Nav.Link
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume"
                ? "nav-link active navbar-gradient"
                : "nav-link navbar-gradient"
            }
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
