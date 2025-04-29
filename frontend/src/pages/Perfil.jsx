// src/pages/Perfil.jsx
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Nav,
  Tab,
  Image,
} from "react-bootstrap";
import { FaUserCircle, FaSignOutAlt, FaSave, FaEdit } from "react-icons/fa";

const Perfil = () => {
  // Datos de ejemplo; en producción vendrían de tu contexto o API
  const [user, setUser] = useState({
    username: "User_1",
    email: "user1@agroinsight.com",
    location: "Córdoba",
    farms: 3,
    dni: "12345678A",
  });
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    setUser(form);
    setEditing(false);
    // aquí harías la llamada a tu API para persistir
  };

  const logout = () => {
    // lógica de logout (limpiar token, redirigir…)
    window.location.href = "/login";
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Mi <span className="feature-text-title">Perfil</span></h1>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <div className="mb-3">
                <FaUserCircle size={80} className="text-secondary" />
              </div>
              <h4>{user.username}</h4>
              <Button
                variant="outline-danger"
                size="sm"
                className="mt-3"
                onClick={logout}
              >
                <FaSignOutAlt className="me-1" />
                Cerrar sesión
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={7}>
          <Card className="shadow-sm">
            <Card.Body>
              <Tab.Container defaultActiveKey="datos">
                <Nav variant="pills" className="mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="datos">Mis datos</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="seguridad">Seguridad</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="datos">
                    <Form>
                      {editing ? (
                        <>
                          {["username","email","location","farms","dni"].map((field) => (
                            <Form.Group
                              controlId={field}
                              className="mb-3"
                              key={field}
                            >
                              <Form.Label className="text-capitalize">
                                {field === "farms"
                                  ? "nº de explotaciones"
                                  : field}
                              </Form.Label>
                              <Form.Control
                                type={
                                  field === "email"
                                    ? "email"
                                    : field === "farms"
                                    ? "number"
                                    : "text"
                                }
                                name={field}
                                value={form[field]}
                                onChange={handleChange}
                              />
                            </Form.Group>
                          ))}
                          <Button
                            variant="success"
                            onClick={saveChanges}
                          >
                            <FaSave className="me-1" />
                            Guardar cambios
                          </Button>{" "}
                          <Button
                            variant="outline-secondary"
                            onClick={() => {
                              setForm(user);
                              setEditing(false);
                            }}
                          >
                            Cancelar
                          </Button>
                        </>
                      ) : (
                        <>
                          <Row className="mb-2">
                            <Col sm={4} className="fw-bold">Usuario:</Col>
                            <Col sm={8}>{user.username}</Col>
                          </Row>
                          <Row className="mb-2">
                            <Col sm={4} className="fw-bold">Email:</Col>
                            <Col sm={8}>{user.email}</Col>
                          </Row>
                          <Row className="mb-2">
                            <Col sm={4} className="fw-bold">Localidad:</Col>
                            <Col sm={8}>{user.location}</Col>
                          </Row>
                          <Row className="mb-2">
                            <Col sm={4} className="fw-bold">Explotaciones:</Col>
                            <Col sm={8}>{user.farms}</Col>
                          </Row>
                          <Row className="mb-4">
                            <Col sm={4} className="fw-bold">DNI:</Col>
                            <Col sm={8}>{user.dni}</Col>
                          </Row>
                          <Button
                            variant="mt-3 btn-alt-explotacion" 
                            onClick={() => setEditing(true)}
                          >
                            <FaEdit className="me-1" />
                            Editar mis datos
                          </Button>
                        </>
                      )}
                    </Form>
                  </Tab.Pane>

                  <Tab.Pane eventKey="seguridad">
                    <Form>
                      <Form.Group controlId="currentPwd" className="mb-3">
                        <Form.Label>Contraseña actual</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>
                      <Form.Group controlId="newPwd" className="mb-3">
                        <Form.Label>Nueva contraseña</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>
                      <Form.Group controlId="confirmPwd" className="mb-4">
                        <Form.Label>Confirmar contraseña</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>
                      <Button variant="outline-secondary">Cambiar contraseña</Button>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Perfil;
