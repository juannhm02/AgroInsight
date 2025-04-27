// src/pages/services/ganadera.jsx
import React from "react";
import { Container, Accordion, ListGroup, Button } from "react-bootstrap";

const explotaciones = [
  {
    id: 1,
    name: "Dehesa del Rey",
    ganado: ["Crotal 0001", "Crotal 0002", "Crotal 0003"],
  },
  {
    id: 2,
    name: "Alcarria",
    ganado: ["Crotal 0101", "Crotal 0102"],
  },
  {
    id: 3,
    name: "Majuelo",
    ganado: ["Crotal 0201", "Crotal 0202", "Crotal 0203"],
  },
  {
    id: 4,
    name: "Laureano",
    ganado: ["Crotal 0301"],
  },
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

    <Button variant="primary">Dar de alta explotación</Button>
  </Container>
);

export default AdministracionGanadera;
