import React from "react";
import AppNavbar from "./Navbar";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => (
  <>
    <AppNavbar />
    <Container fluid className="p-0">
      {children}
    </Container>
    {/* Aquí podrías añadir un Footer si lo necesitas */}
  </>
);

export default Layout;
