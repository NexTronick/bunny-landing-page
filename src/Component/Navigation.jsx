import { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  let getActiveState = (name) => {
    const url = window.location.pathname;
    if (url === name) {
      return "active";
    }
    return "";
  };
  return (
    <Navbar
      style={{ backgroundColor: "rgba(105, 4, 97, 1)" }}
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">Chumitans</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={"nav-link " + getActiveState("/")}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/gallery"
              className={"nav-link " + getActiveState("/gallery")}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              href="/about"
              className={"nav-link " + getActiveState("/about")}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
