import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ForgotPassword = () => (
  <Container fluid className="p-0">
    <Row className="g-0 vh-100">
      <Col md={6} className="position-relative d-flex bg-white">
        <img
          src="/LOGO.png"
          alt="AgroInsight Mini"
          className="position-absolute top-0 start-0 m-3"
          style={{ width: 40, height: 40 }}
        />
        <div className="m-auto">
          <img
            src="/home.png"
            alt="AgroInsight"
            className="img-fluid"
            style={{ maxWidth: 300 }}
          />
        </div>
      </Col>

      <Col
        md={6}
        className="d-flex align-items-center justify-content-center bg-primary text-white"
      >
        <div className="w-75 text-center">
          <h2 className="mb-4">Recuperar contraseña</h2>
          <p>
            Introduce tu email y recibirás instrucciones para restablecer tu contraseña.
          </p>
          <Form>
            <Form.Group controlId="email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                className="rounded-pill bg-secondary bg-opacity-50 border-0 text-white"
              />
            </Form.Group>
            <Button
              variant="outline-light"
              type="submit"
              className="w-100 rounded-pill py-2 fw-bold"
            >
              Enviar enlace
            </Button>
            <div className="mt-3">
              <a href="/login" className="text-secondary">
                Volver al inicio de sesión
              </a>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
);

export default ForgotPassword;
