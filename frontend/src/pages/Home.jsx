import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { FaUserCircle } from "react-icons/fa";

const Home = () => (
  <>
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="/LOGO_white.png" height="30" alt="AgroInsight" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/servicios">Servicios</Nav.Link>
            <Nav.Link href="/sobre">Sobre AgroI</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Nav.Link href="/perfil">
              <FaUserCircle size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Carrusel centrado y con tamaño fijo */}
    <Container className="my-5 d-flex justify-content-center" >
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <Carousel variant="white" className="rounded-3 shadow">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/carrusel/Slide1.jpg"
              alt="Slide 1"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption className="text-white">
              <p>Utilizamos tecnología avanzada para monitorear la salud y bienestar de tu ganado</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/carrusel/Slide2.jpg"
              alt="Slide 2"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption className="text-white">
              <p>Optimiza el uso de tus pastos para maximizar la producción y sostenibilidad</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/carrusel/Slide3.jpg"
              alt="Slide 3"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption className="text-white">
              <p>Obtén tantas facilidades como necesites en el control de cinegética</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/carrusel/Slide4.jpg"
              alt="Slide 4"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption className="text-white">
                <p>Mejora la trazabilidad de tus productos ganaderos con nuestra plataforma</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/carrusel/Slide5.jpg"
              alt="Slide 5"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption className="text-white">
              <p>Con AgroInsight, tu ganado está en las mejores manos</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>

    <Container className="py-5">
      <div className="row">
        <div className="col-md-8">
          <p className="fs-5">
            Si estás cansado/a de no saber dónde apuntas todos tus trámites ganaderos ... AgroInsight es tu sitio web, en un solo lugar y al alcance de tu mano en todo momento......
          </p>
        </div>
        <div className="col-md-4 text-center">
          <img src="/home.png" alt="AgroInsight" className="img-fluid" />
          <p className="mt-2">Gestión ganadera inteligente</p>
        </div>
      </div>
    </Container>
  </>
);

export default Home;