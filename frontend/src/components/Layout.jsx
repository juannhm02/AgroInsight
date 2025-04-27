// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import AppNavbar from "./Navbar";
import { Container } from "react-bootstrap";

const Layout = () => (
  <>
    <AppNavbar />
    <Container fluid className="p-0">
      <Outlet /> {/* Aquí se inyectan Home, Servicios, etc. */}
    </Container>
  </>
);

export default Layout;
