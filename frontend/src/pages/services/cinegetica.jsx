// src/pages/services/cinegetica.jsx
import React from "react";
import { Container, Accordion, ListGroup, Button } from "react-bootstrap";

const zonas = [
  {
    id: 1,
    name: "Finca El Castejón",
    cacerías: ["02/03/2025 - Batida jabalí", "10/03/2025 - Rececho ciervo"],
  },
  {
    id: 2,
    name: "Monte Alto",
    cacerías: ["15/03/2025 - Montería venados"],
  },
];

const AdministracionCinegetica = () => (
  <Container className="py-5">
    <h1 className="mb-4">Administración cinegética</h1>

    <Accordion defaultActiveKey="0" className="mb-4">
      {zonas.map((zona, idx) => (
        <Accordion.Item eventKey={idx.toString()} key={zona.id}>
          <Accordion.Header>{zona.name}</Accordion.Header>
          <Accordion.Body>
            <h5>Cacerías</h5>
            <ListGroup>
              {zona.cacerías.map((c, i) => (
                <ListGroup.Item key={i}>{c}</ListGroup.Item>
              ))}
            </ListGroup>
            <Button variant="success" className="mt-3">
              Planificar cacería
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>

    <Button variant="sucess" className="mt-3 btn-alt-explotacion">Dar de alta zona cinegética</Button>
  </Container>
);

export default AdministracionCinegetica;
