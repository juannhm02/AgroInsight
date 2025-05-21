// src/pages/Contacto.jsx
import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaMapSigns } from "react-icons/fa";

const Contacto = () => (
  <Container className="py-5">
    {/* Título */}
    <h1 className="text-center mb-5">
      Ponte en <span className="feature-text-title">contacto</span> con nosotros
    </h1>

    <Row className="g-4">
      {/* Formulario */}
      <Col md={7}>
        <Card className="border-0 shadow-sm">
          <Card.Body>
            <h4 className="mb-4">Envíanos un mensaje</h4>
            <Form>
              <Form.Group controlId="contactName" className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  className="rounded-pill"
                />
              </Form.Group>
              <Form.Group controlId="contactEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  className="rounded-pill"
                />
              </Form.Group>
              <Form.Group controlId="contactSubject" className="mb-3">
                <Form.Label>Asunto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Motivo de tu mensaje"
                  className="rounded-pill"
                />
              </Form.Group>
              <Form.Group controlId="contactMessage" className="mb-4">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Escribe tu mensaje aquí..."
                  className="rounded-3"
                />
              </Form.Group>
              <Button variant="outline-secondary" type="submit" className="rounded-pill px-4">
                Enviar mensaje
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>

      {/* Información de contacto */}
      <Col md={5}>
        <h4 className="mb-4">Nuestra oficina</h4>
        <div className="mb-4">

          <FaMapSigns size={24} className="me-2 text-secondary" />
          <span>Campus de Rabanales. Universidad de Córdoba </span>
        </div>
        <div className="mb-4">
          <FaMapMarkerAlt size={24} className="me-2 text-secondary" />
          <span>N-IV, km 396, 14014 Córdoba </span>
        </div>
        <div className="mb-4">
          <FaEnvelope size={24} className="me-2 text-secondary" />
          <span>soporte@agroinsight.com</span>
        </div>
        <div className="mb-4">
          <FaPhone size={24} className="me-2 text-secondary" />
          <span>+34 957 00 12 34</span>
        </div>
        {/* Mapa embebido */}
        <div className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50380.92146816362!2d-4.855656623840358!3d37.88818215027996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d20924ad6b75b%3A0x8cb499e9645d592e!2sCampus%20de%20Rabanales.%20Universidad%20de%20C%C3%B3rdoba!5e0!3m2!1ses!2ses!4v1747812057216!5m2!1ses!2ses"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Contacto;