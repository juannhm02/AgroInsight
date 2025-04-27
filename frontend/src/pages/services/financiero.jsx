// src/pages/services/financiero.jsx
import React from "react";
import { Container, Accordion, Table, Button } from "react-bootstrap";

const finanzas = [
  {
    id: 1,
    explotation: "Dehesa del Rey",
    ingresos: 12000,
    gastos: 8000,
    detalle: [
      { concepto: "Venta leche", monto: 5000 },
      { concepto: "Compra pienso", monto: 3000 },
      { concepto: "Venta terneros", monto: 7000 },
      { concepto: "Vacunas", monto: 500 },
    ],
  },
  {
    id: 2,
    explotation: "Alcarria",
    ingresos: 8000,
    gastos: 4000,
    detalle: [
      { concepto: "Venta carne", monto: 6000 },
      { concepto: "Medicinas", monto: 400 },
    ],
  },
];

const ModuloFinanciero = () => (
  <Container className="py-5">
    <h1 className="mb-4">Módulo financiero</h1>

    <Accordion defaultActiveKey="0">
      {finanzas.map((f, idx) => (
        <Accordion.Item eventKey={idx.toString()} key={f.id}>
          <Accordion.Header>
            {f.explotation} — Ingresos: {f.ingresos} € | Gastos: {f.gastos} €
          </Accordion.Header>
          <Accordion.Body>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th>Monto (€)</th>
                </tr>
              </thead>
              <tbody>
                {f.detalle.map((d, i) => (
                  <tr key={i}>
                    <td>{d.concepto}</td>
                    <td>{d.monto}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button variant="success">Añadir movimiento</Button>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  </Container>
);

export default ModuloFinanciero;
