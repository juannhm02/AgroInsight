// src/pages/services/saneamientos.jsx
import React from "react";
import { Container, Tab, Nav, Table, Button } from "react-bootstrap";

const pendientes = [
  { id: 1, animal: "Crotal 0001", tipo: "Vacuna", fechaPrevista: "05/05/2025" },
  { id: 2, animal: "Crotal 0102", tipo: "Desparasitación", fechaPrevista: "07/05/2025" },
];

const historico = [
  { id: 1, animal: "Crotal 0003", tipo: "Vacuna", fechaReal: "01/04/2025" },
  { id: 2, animal: "Crotal 0201", tipo: "Tratamiento", fechaReal: "15/03/2025" },
];

const ControlSaneamientos = () => (
  <Container className="py-5">
    <h1 className="mb-4">Control de saneamientos</h1>

    <Tab.Container defaultActiveKey="pendientes">
      <Nav variant="pills" className="mb-3">
        <Nav.Item>
          <Nav.Link eventKey="pendientes">Pendientes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="historico">Histórico</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="pendientes">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Animal</th>
                <th>Tipo</th>
                <th>Fecha prevista</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {pendientes.map((row) => (
                <tr key={row.id}>
                  <td>{row.animal}</td>
                  <td>{row.tipo}</td>
                  <td>{row.fechaPrevista}</td>
                  <td>
                    <Button size="sm">Marcar realizado</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab.Pane>
        <Tab.Pane eventKey="historico">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Animal</th>
                <th>Tipo</th>
                <th>Fecha real</th>
              </tr>
            </thead>
            <tbody>
              {historico.map((row) => (
                <tr key={row.id}>
                  <td>{row.animal}</td>
                  <td>{row.tipo}</td>
                  <td>{row.fechaReal}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  </Container>
);

export default ControlSaneamientos;
