import React from "react";
import { Container, Carousel } from "react-bootstrap";

const slides = [
  "/carrusel/Slide1.png",
  "/carrusel/Slide2.png",
  "/carrusel/Slide3.png",
  "/carrusel/Slide4.png",
  "/carrusel/Slide5.png",
  "/carrusel/Slide6.png",
];

const Home = () => (
  <>
    {/* Carrusel + imagen lateral, centrados */}
    <Container className="my-5 d-flex justify-content-center align-items-center">
      {/* Wrapper del carrusel */}
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
      {/* Imagen lateral */}
      <div className="side-image-wrapper">
        <img
          src="/prueba.png"
          alt="AgroInsight"
          className="img-fluid"
        />
      </div>
    </Container>

    {/* Texto y logo */}
    <Container className="py-5">
      <div className="row">
        <div className="col-md-8">
          <p className="fs-5">
            Si estás cansado/a de no saber dónde apuntas todos tus trámites
            ganaderos … AgroInsight es tu sitio web, en un solo lugar y al
            alcance de tu mano en todo momento……
          </p>
          <ul className="list-unstyled ps-3">
            <li>
              • AgroInsight integra módulos de administración ganadera,
              cinegética y monitoreo en tiempo real de tu ganado.
            </li>
            <li>
              • Controla ingresos y gastos de la explotación con nuestro
              módulo económico de fácil uso.
            </li>
          </ul>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="/home.png"
            alt="AgroInsight"
            className="img-fluid mb-3"
          />
          <p className="mt-2">Gestión ganadera inteligente</p>
        </div>
      </div>
    </Container>
  </>
);

export default Home;
