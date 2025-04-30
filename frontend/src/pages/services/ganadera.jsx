// src/pages/services/ganadera.jsx
import React from "react";
import { Container, Accordion, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const explotaciones = [
  { id: 1, name: "Dehesa del Rey",   ganado: ["Vacuno", "Porcino", "Caprino", "Bovino", "Equino",] },
  { id: 2, name: "Alcarria",         ganado: ["Vacuno", "Porcino", "Caprino", "Bovino", "Equino",]  },
  { id: 3, name: "Majuelo",          ganado: ["Vacuno", "Porcino", "Caprino", "Bovino", "Equino",]  },
  { id: 4, name: "Laureano",         ganado: ["Vacuno", "Porcino", "Caprino", "Bovino", "Equino",]  },
  { id: 5, name: "Camino Real",      ganado: ["Vacuno", "Porcino", "Caprino", "Bovino", "Equino",]  },
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
            <div className="d-flex flex-wrap mb-3">
              {exp.ganado.map((g) => (
                <Link
                  key={g}
                  to={`/servicios/ganado/${exp.id}/${g.toLowerCase()}`}
                  className="text-decoration-none"
                >
                  <Button
                    variant="success"
                    className="me-2 mb-2"
                  >
                    {g}
                  </Button>
                </Link>
              ))}
            </div>

            <Button variant="success" className="mt-3 btn-alt-explotacion">
              Dar de alta ganado
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>

    <Button variant="success" className="mt-3 btn-alt-explotacion">
      Dar de alta explotación
    </Button>
  </Container>
);

export default AdministracionGanadera;
