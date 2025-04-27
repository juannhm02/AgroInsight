import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => (
  <Container fluid className="p-0">
    <Row className="g-0 vh-100">
      {/* =========== LADO IZQUIERDO ============= */}
      <Col md={6} className="position-relative d-flex bg-white">
        {/* logo circular en esquina */}
        <img
          src="/LOGO.png"
          alt="AgroInsight Mini"
          className="position-absolute top-0 start-0 m-3"
          style={{ width: 40, height: 40 }}
        />
        {/* logo principal centrado */}
        <div className="m-auto">
          <img
            src="/home.png"
            alt="AgroInsight"
            className="img-fluid"
            style={{ maxWidth: 300 }}
          />
        </div>
      </Col>

      {/* =========== LADO DERECHO ============= */}
      <Col
        md={6}
        className="d-flex align-items-center justify-content-center bg-primary text-white"
      >
        <div className="w-75">
          <h2 className="mb-4">Bienvenido de nuevo</h2>
          <p>
            ¿Aún no tienes cuenta?{" "}
            <a href="/register" className="text-secondary">
              Solicita registro
            </a>
          </p>

          <Form>
            <Form.Group controlId="username" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Nombre de usuario"
                className="rounded-pill bg-secondary bg-opacity-50 border-0 text-white"
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                className="rounded-pill bg-secondary bg-opacity-50 border-0 text-white"
              />
            </Form.Group>

            <Form.Group
              controlId="remember"
              className="mb-3 d-flex justify-content-between align-items-center"
            >
              <Form.Check 
                label="Mantenerme logueado" 
                className="text-white" 
              />
              <a href="/forgot" className="text-secondary">
                Has olvidado la contraseña?
              </a>
            </Form.Group>

            <Button
              variant="outline-light"
              type="submit"
              className="w-100 rounded-pill py-2 fw-bold"
            >
              <a href="/home" className="text-decoration-none text-white">
                Acceso
              </a>
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Login;
