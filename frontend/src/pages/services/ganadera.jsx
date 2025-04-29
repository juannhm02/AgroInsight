// src/pages/services/ganadera.jsx
import React from "react";
import { Container, Accordion, ListGroup, Button } from "react-bootstrap";

const explotaciones = [
  {
    id: 1,
    name: "Dehesa del Rey",
    ganado: ["Vacuno", "Porcino", "Bovino", "Equino", "Caprino"],
  },
  {
    id: 2,
    name: "Alcarria",
    ganado: ["Vacuno", "Porcino", "Bovino", "Equino", "Caprino"],  },
  {
    id: 3,
    name: "Majuelo",
    ganado: ["Vacuno", "Porcino", "Bovino", "Equino", "Caprino"],  },
  {
    id: 4,
    name: "Laureano",
    ganado: ["Vacuno", "Porcino", "Bovino", "Equino", "Caprino"],  },
  {
    id: 5,
    name: "Camino Real",
    ganado: ["Vacuno", "Porcino", "Bovino", "Equino", "Caprino"],  },
];

const AdministracionGanadera = () => (
  <Container className="py-5">
    <h1 className="mb-4">Administración ganadera</h1>

    <Accordion defaultActiveKey="0" className="mb-4">
      {explotaciones.map((exp, idx) => (
        <Accordion.Item eventKey={idx.toString()} key={exp.id}>
          <Accordion.Header>{exp.name}</Accordion.Header>
          <Accordion.Body>
            <h5>Ganado</h5>
            <ListGroup>
              {exp.ganado.map((g) => (
                <ListGroup.Item key={g}>{g}</ListGroup.Item>
              ))}
            </ListGroup>
            <Button variant="success" className="mt-3">
              Dar de alta ganado
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>

    <Button variant="success" className="mt-3 btn-alt-explotacion">Dar de alta explotación</Button>
  </Container>
);

export default AdministracionGanadera;
