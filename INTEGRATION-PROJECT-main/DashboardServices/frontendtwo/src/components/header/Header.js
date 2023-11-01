import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Navbar
      bg="variant"
      expand="lg"
      className="header"
      style={{ backgroundColor: "#6c757d !important" }}
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          Dynamic Microservices Generation
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => navigate("/home")}
              style={{ color: "white" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#health-api"
              onClick={() => navigate("/health-api")}
              style={{ color: "white" }}
            >
              Health-API
            </Nav.Link>
            <Nav.Link
              href="#unsure-api"
              onClick={() => navigate("/unsure-api")}
              style={{ color: "white" }}
            >
              Unsure-API
            </Nav.Link>
            <Nav.Link
              href="#report"
              onClick={() => navigate("/report")}
              style={{ color: "white" }}
            >
              Reports
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* <Container>
        <Navbar.Brand href="#home">
          Dynamic Microservices Generation
          <font style={{ marginLeft: "40px", marginRight: "20px" }}>::::</font>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" onClick={() => navigate("/home")}>
            Home
          </Nav.Link>
          <Nav.Link href="#health-api" onClick={() => navigate("/health-api")}>
            Health-API
          </Nav.Link>
          <Nav.Link href="#unsure-api" onClick={() => navigate("/unsure-api")}>
            Unsure-API
          </Nav.Link>
          <Nav.Link href="#report" onClick={() => navigate("/report")}>
            Reports
          </Nav.Link>
        </Nav>
      </Container> */}
    </Navbar>
  );
}
