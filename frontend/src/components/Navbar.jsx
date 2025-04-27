// src/components/NavBar.jsx
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
        <Nav className="ms-auto align-items-center">
          <Nav.Link href="/">Inicio</Nav.Link>

          {/* Dropdown “Servicios” */}
          <Nav.Item className="nav-item dropdown">
            <Nav.Link
              href="#"
              className="dropdown-toggle"
              id="servicesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Servicios
            </Nav.Link>
            <ul
              style={{ width: "350px" }}
              className="dropdown-menu bg-primary border-0 rounded-3 shadow"
              aria-labelledby="servicesDropdown"
            >
              <li>
                <Nav.Link
                  href="/servicios/ganadera"
                  style={{ width: "220px" }}
                  className="dropdown-item text-white"
                >
                  Administración ganadera
                </Nav.Link>
              </li>
              <li>
                <hr className="dropdown-divider border-light my-1" />
              </li>
              <li>
                <Nav.Link
                  href="/servicios/cinegetica"
                  style={{ width: "220px" }}
                  className="dropdown-item text-white"
                >
                  Administración cinegética
                </Nav.Link>
              </li>
              <li>
                <hr className="dropdown-divider border-light my-1" />
              </li>
              <li>
                <Nav.Link
                  href="/servicios/saneamientos"
                  style={{ width: "220px" }}
                  className="dropdown-item text-white"
                >
                  Control de saneamientos
                </Nav.Link>
              </li>
              <li>
                <hr className="dropdown-divider border-light my-1" />
              </li>
              <li>
                <Nav.Link
                  href="/servicios/financiero"
                  style={{ width: "220px" }}
                  className="dropdown-item text-white"
                >
                  Modulo financiero
                </Nav.Link>
              </li>
            </ul>
          </Nav.Item>

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
