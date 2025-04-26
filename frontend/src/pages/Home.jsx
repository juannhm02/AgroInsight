import React from "react";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import {
  FaMapMarkedAlt,
  FaChartLine,
  FaClipboardList,
  FaCloud,
  FaSyncAlt,
  FaFileImport,
} from "react-icons/fa";

const slides = [
  "/carrusel/Slide1.png",
  "/carrusel/Slide2.png",
  "/carrusel/Slide3.png",
  "/carrusel/Slide4.png",
  "/carrusel/Slide5.png",
  "/carrusel/Slide6.png",
];

const features = [
  {
    icon: FaMapMarkedAlt,
    title: "Gestiona tus rebaños",
    desc: "Controla dónde ha pastado cada vaca y organiza tus explotaciones.",
  },
  {
    icon: FaChartLine,
    title: "Histórico de terneros",
    desc: "Consulta cuántos terneros ha tenido cada vaca y su evolución.",
  },
  {
    icon: FaClipboardList,
    title: "Simplifica saneamientos",
    desc: "Automatiza el papeleo al registrar saneamientos y tratamientos.",
  },
  {
    icon: FaCloud,
    title: "A la nube",
    desc: "Tus datos guardados en la nube, accesibles desde cualquier sitio.",
  },
  {
    icon: FaSyncAlt,
    title: "Modo Offline",
    desc: "Sigue trabajando sin conexión: se sincroniza cuando vuelvas online.",
  },
  {
    icon: FaFileImport,
    title: "Importa y exporta",
    desc: "Lee y exporta informes en Excel con un clic.",
  },
];

const Home = () => (
  <>
    {/* Carrusel + imagen lateral, centrados */}
    <Container className="my-5 d-flex justify-content-center align-items-center">
      <div className="carousel-wrapper me-4">
        <Carousel
          variant="white"
          className="border border-secondary custom-carousel-border rounded-3 overflow-hidden shadow"
        >
          {slides.map((src, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100 carousel-img"
                src={src}
                alt={`Slide ${idx + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="side-image-wrapper">
        <img src="/home.png" alt="AgroInsight" className="img-fluid side-img" />
      </div>
    </Container>

    {/* Sección "Qué ofrece AgroInsight" */}
    <Container className="py-5">
      <h2 className="text-center mb-4">Qué ofrece <span className="feature-text-title">AgroInsight</span></h2>
      <Row className="g-4 justify-content-center">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <Col key={i} xs={12} md={4} className="text-center">
            <Icon className="feature-icon mb-2" />
            <h5 className="feature-title">{title}</h5>
            <p className="feature-desc">{desc}</p>
          </Col>
        ))}
      </Row>
    </Container>
    {/* Sección "¿Nuestros ganaderos" */}
    <Container className="py-5">
      <h2 className="text-center mb-4">Lo que dicen nuestros <span className="feature-text-title">ganaderos</span></h2>
      <Row className="align-items-center">
        <Col md={6}>
          <TestimonialsCarousel />
        </Col>
        <Col md={6} className="text-center">
          <img
            src="/splice.png"
            alt="AgroInsight"
            className="img-fluid side-last-img"
            style={{ borderRadius: "15px" }} // Bordes redondeados
          />
        </Col>
      </Row>
    </Container>
  </>
);

export default Home;
