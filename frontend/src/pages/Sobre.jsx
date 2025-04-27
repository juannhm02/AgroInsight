// src/pages/Sobre.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";

const valores = [
  {
    icon: FaBullseye,
    title: "Calidad",
    text: "Nos comprometemos a ofrecer una solución fiable, segura y pensada para el día a día del ganadero.",
  },
  {
    icon: FaEye,
    title: "Transparencia",
    text: "Toda la información de tu explotación está en un mismo lugar, accesible y auditable en tiempo real.",
  },
  {
    icon: FaHandsHelping,
    title: "Soporte",
    text: "Nuestro equipo está a tu lado para ayudarte a sacar el máximo partido a AgroInsight.",
  },
];

const Sobre = () => (
  <Container className="py-5">
    {/* Título */}
    <h1 className="text-center mb-5">
      Sobre <span className="feature-text-title">AgroInsight</span>
    </h1>

    {/* Misión */}
    <Row className="align-items-center mb-5">
      <Col md={6}>
        <img
          src="/about/mision.png"
            style={{ maxWidth: "70%" }}
          alt="Misión AgroInsight"
          className="img-fluid rounded-3 shadow"
        />
      </Col>
      <Col md={6}>
        <h3>Misión</h3>
        <p>
          Nuestra misión es modernizar la gestión ganadera proporcionando una
          plataforma integral que te permita controlar todos los aspectos de tu
          explotación desde cualquier dispositivo y lugar.
        </p>
      </Col>
    </Row>

    {/* Visión */}
    <Row className="align-items-center mb-5">
      <Col
        md={{ span: 6, order: 2 }}
        className="text-md-end text-center mb-4 mb-md-0"
      >
        <img
          src="/about/vision.png"
            style={{ maxWidth: "70%" }}
          alt="Visión AgroInsight"
          className="img-fluid rounded-3 shadow"
        />
      </Col>
      <Col md={{ span: 6, order: 1 }}>
        <h3>Visión</h3>
        <p>
          Queremos ser la herramienta de referencia en la transformación digital
          del sector ganadero, promoviendo la sostenibilidad y la eficiencia
          gracias al dato y la tecnología.
        </p>
      </Col>
    </Row>

    {/* Nuestros valores */}
    <h2 className="text-center mb-4">
      Nuestros <span className="feature-text-title">valores</span>
    </h2>
    <Row className="g-4 justify-content-center">
      {valores.map(({ icon: Icon, title, text }, i) => (
        <Col key={i} xs={12} md={4}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center">
              <Icon className="mb-3" size={48} color="var(--secondary)" />
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    {/* Equipo */}
    <h2 className="text-center my-5">
      Conoce al <span className="feature-text-title">equipo</span>
    </h2>
    <Row className="g-4 justify-content-center">
      <Col xs={6} sm={4} md={3} className="text-center">
      <img
          src="/about/team2.jpg"
          alt="Enrique Yeguas"
          className="img-fluid rounded-circle mb-2"
        />
        <h6>Enrique Yeguas Bolívar</h6>
        <small>Co‐director de Proyecto</small>
      </Col>
      <Col xs={6} sm={4} md={3} className="text-center">
        <img
          src="/about/team1.jpg"
          alt="Juan Higuera"
          className="img-fluid rounded-circle mb-2"
        />
        <h6>Juan Higuera Mohedano</h6>
        <small>Desarrollador Principal</small>
      </Col>
      <Col xs={6} sm={4} md={3} className="text-center">
        <img
          src="/about/team3.jpg"
          alt="José Alcalde"
          className="img-fluid rounded-circle mb-2"
        />
        <h6>José Manuel Alcalde Llergo</h6>
        <small>Director Académico</small>
      </Col>
    </Row>
  </Container>
);

export default Sobre;
