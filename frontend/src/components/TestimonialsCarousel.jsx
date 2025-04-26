// src/components/TestimonialsCarousel.jsx
import React from "react";
import { Container, Carousel } from "react-bootstrap";

const testimonials = [
  {
    text: "“AgroInsight ha transformado la forma en que gestiono mi granja. ¡Imprescindible!”",
    author: "Juan Pérez, Ganadero",
  },
  {
    text: "“La gestión de mis rebaños nunca ha sido tan fácil. ¡Gracias AgroInsight!”",
    author: "María López, Ganadera",
  },
  {
    text: "“La nube me permite acceder a mis datos desde cualquier lugar. ¡Increíble!”",
    author: "Carlos García, Ganadero",
  },
  {
    text: "“La sincronización offline es un gran plus. Puedo trabajar sin preocupaciones.”",
    author: "Ana Martínez, Ganadera",
  },
  {
    text: "“La importación y exportación de datos es muy sencilla. ¡Me encanta!”",
    author: "Luis Fernández, Ganadero",
  },
  {
    text: "“AgroInsight ha facilitado mi trabajo diario. ¡Recomiendo esta herramienta!”",
    author: "Sofía Rodríguez, Ganadera",
  },
];

const TestimonialsCarousel = () => (
  <Container className="py-5">
    <Carousel
      indicators
      controls
      interval={6000}
      className="testimonials-carousel"
    >
      {testimonials.map(({ text, author }, idx) => (
        <Carousel.Item key={idx}>
          <div className="d-flex flex-column justify-content-center align-items-center p-4">
            <p className="fs-5 text-center mb-3">{text}</p>
            <footer className="blockquote-footer text-center">{author}</footer>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </Container>
);

export default TestimonialsCarousel;
