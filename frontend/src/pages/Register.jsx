import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";

const Register = () => {
  const [showTerms, setShowTerms] = useState(false);

  const handleShowTerms = () => setShowTerms(true);
  const handleCloseTerms = () => setShowTerms(false);

  return (
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
                <span
                  className="text-secondary"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={handleShowTerms}
                >
                  aquí
                </span>{" "}
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

      {/* Modal de Términos y Condiciones */}
      <style>
        {`
          .wide-modal {
            max-width: 900px;
          }
          .modal-body p {
            text-align: justify;
          }
        `}
      </style>
      <Modal
        show={showTerms}
        onHide={handleCloseTerms}
        backdrop="static"
        keyboard={false}
        centered
        dialogClassName="wide-modal"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleCloseTerms();
          }
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Términos y Condiciones</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="mb-3">Términos y Condiciones</h5>
          <p>
            Bienvenido a AgroInsight. Al registrarte y utilizar nuestra plataforma, aceptas los siguientes términos y condiciones:
          </p>

          <h6 className="mt-4">1. Uso de la Plataforma</h6>
          <ul>
            <li>
              AgroInsight está diseñado para la gestión de datos relacionados con la ganadería y la agricultura. El uso de la plataforma debe ser exclusivamente para fines legales y relacionados con estas actividades.
            </li>
            <li>
              No está permitido utilizar la plataforma para actividades fraudulentas, ilegales o que puedan dañar la integridad de otros usuarios.
            </li>
          </ul>

          <h6 className="mt-4">2. Protección de Datos</h6>
          <ul>
            <li>
              Nos comprometemos a proteger la privacidad de tus datos personales. Consulta nuestra política de privacidad para más detalles.
            </li>
            <li>
              Los datos proporcionados serán utilizados únicamente para mejorar tu experiencia en la plataforma y no serán compartidos con terceros sin tu consentimiento.
            </li>
          </ul>

          <h6 className="mt-4">3. Responsabilidades del Usuario</h6>
          <ul>
            <li>
              Eres responsable de la veracidad de los datos que introduces en la plataforma.
            </li>
            <li>
              Debes mantener la confidencialidad de tus credenciales de acceso. AgroInsight no se hace responsable de accesos no autorizados debido a negligencia del usuario.
            </li>
          </ul>

          <h6 className="mt-4">4. Limitación de Responsabilidad</h6>
          <ul>
            <li>
              AgroInsight no se hace responsable de pérdidas económicas, daños o perjuicios derivados del uso de la plataforma.
            </li>
            <li>
              La plataforma se proporciona "tal cual" y no garantizamos que esté libre de errores o interrupciones.
            </li>
          </ul>

          <h6 className="mt-4">5. Modificaciones</h6>
          <ul>
            <li>
              AgroInsight se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Se notificará a los usuarios sobre cambios importantes.
            </li>
          </ul>

          <h6 className="mt-4">6. Contacto</h6>
          <p>
            Si tienes preguntas o inquietudes sobre estos términos, puedes contactarnos a través de nuestro correo electrónico: soporte@agroinsight.com.
          </p>

          <p className="mt-4">
            Al hacer clic en "Aceptar", confirmas que has leído y aceptado estos términos y condiciones.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTerms}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Register;
