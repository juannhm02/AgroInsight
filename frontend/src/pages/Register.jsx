import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Register = () => (
  <Container fluid className="p-0">
    <Row className="g-0 vh-100">
      <Col md={6} className="position-relative d-flex bg-white">
        <img
          src="/LOGO.png"
          alt="AgroInsight Mini"
          className="position-absolute top-0 start-0 m-3"
          style={{ width: 80, height: 80 }}
        />
        <div className="m-auto">
          <img
            src="/home.png"
            alt="AgroInsight"
            className="img-fluid"
            style={{ maxWidth: 700 }}
          />
        </div>
      </Col>

      <Col
        md={6}
        className="d-flex align-items-center justify-content-center bg-primary text-white"
      >
        <div className="w-75">
          <h2 className="mb-4">Crea tu cuenta</h2>
          <Form>
            {[
              { id: "username", placeholder: "Nombre de usuario" },
              { id: "location", placeholder: "Localidad" },
              { id: "farms", placeholder: "Número de explotaciones" },
              { id: "dni", placeholder: "DNI" },
              { id: "email", placeholder: "Email" },
            ].map(({ id, placeholder }) => (
              <Form.Group controlId={id} className="mb-3" key={id}>
                <Form.Control
                  type="text"
                  placeholder={placeholder}
                  className="rounded-pill bg-secondary bg-opacity-50 border-0 text-white"
                />
              </Form.Group>
            ))}

            <Form.Group controlId="password" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                className="rounded-pill bg-secondary bg-opacity-50 border-0 text-white"
              />
            </Form.Group>
            <Form.Group controlId="confirm" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Confirmar Contraseña"
                className="rounded-pill bg-secondary bg-opacity-50 border-0 text-white"
              />
            </Form.Group>

            <p>
              Haga click{" "}
              <a href="/terms" className="text-secondary">
                aquí
              </a>{" "}
              para leer los términos y condiciones.
            </p>
            <Form.Check
              type="checkbox"
              label="Acepto los términos y condiciones"
              className="mb-4 text-white"
            />

            <Button
              variant="outline-light"
              type="submit"
              className="w-100 rounded-pill py-2 fw-bold"
            >
              Crear Cuenta
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Register;
