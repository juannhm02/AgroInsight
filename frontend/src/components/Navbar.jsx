import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

const AppNavbar = () => (
  <Navbar expand="lg" variant="dark" className="bg-primary">
    <Container>
      <Navbar.Brand href="/">
        <img src="/LOGO_white.png" height="30" alt="AgroInsight" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-nav" />
      <Navbar.Collapse id="main-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/servicios">Servicios</Nav.Link>
          <Nav.Link href="/sobre">Sobre AgrI</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
          <Nav.Link href="/perfil" className="profile-link">
            <FaUserCircle size={24} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppNavbar;
