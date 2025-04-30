// src/pages/services/GanadoList.jsx
import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Table,
  Button,
  Modal,
} from "react-bootstrap";

// Datos de ejemplo; en producción vendrían de tu API
const explotaciones = [
  { id: "1", name: "Dehesa del Rey" },
  { id: "2", name: "Alcarria" },
  { id: "3", name: "Majuelo" },
  { id: "4", name: "Laureano" },
  { id: "5", name: "Camino Real" },
];

const datosDeEjemplo = {
  "1": {
    vacuno: [
      {
        crotal: "0001",
        sexo: "Macho",
        edad: "2 años",
        fechaCompra: "01/03/2023",
        peso: "350 kg",
        raza: "Charolés",
        cria: "0005",
        proximoParto: "15/09/2025",
      },
      {
        crotal: "0002",
        sexo: "Hembra",
        edad: "1 año",
        fechaCompra: "12/06/2023",
        peso: "280 kg",
        raza: "Limusín",
        cria: "—",
        proximoParto: "—",
      },
    ],
    porcino: [
      /* … */
    ],
    /* … otros tipos si los hubiera */
  },
  /* … otras explotaciones */
};

const ListaGanado = () => {
  const { expId, tipo } = useParams();
  const nombreExp =
    explotaciones.find((e) => e.id === expId)?.name || `#${expId}`;

  // Estado con la lista actual, para poder modificarla (dar de baja)
  const [listaActual, setListaActual] = useState(datosDeEjemplo[expId]?.[tipo] || []);

  // estados de filtros
  const [filtCrotal, setFiltCrotal] = useState("");
  const [filtSexo, setFiltSexo] = useState("");
  const [filtEdad, setFiltEdad] = useState("");
  const [filtRaza, setFiltRaza] = useState("");
  // Compute unique races from the current list
  const razas = Array.from(new Set(listaActual.map(i => i.raza)));
  const [selCrotal, setSelCrotal] = useState("");

  // Estado para el modal de confirmación
  const [showModal, setShowModal] = useState(false);

  // lista filtrada
  const listaFiltrada = useMemo(() => {
    return listaActual.filter((item) => {
      if (
        filtCrotal &&
        !item.crotal.toLowerCase().includes(filtCrotal.toLowerCase())
      )
        return false;
      if (filtSexo && item.sexo !== filtSexo) return false;
      if (
        filtEdad &&
        !item.edad.toLowerCase().includes(filtEdad.toLowerCase())
      )
        return false;
      if (
        filtRaza &&
        !item.raza.toLowerCase().includes(filtRaza.toLowerCase())
      )
        return false;
      return true;
    });
  }, [listaActual, filtCrotal, filtSexo, filtEdad, filtRaza]);

  // Función para cerrar el modal
  const handleCloseModal = () => setShowModal(false);

  // Función para abrir el modal
  const handleShowModal = () => setShowModal(true);

  // Función para confirmar la baja (eliminar solo el ganado seleccionado)
  const handleConfirmDelete = () => {
    const nuevosDatos = listaActual.filter(item => item.crotal !== selCrotal);
    setListaActual(nuevosDatos);
    setSelCrotal("");
    setShowModal(false);
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">
        Explotación «{nombreExp}» –{" "}
        {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
      </h1>

      <Row>
        {/* Filtros y botón de baja */}
        <Col md={3}>
          <Card className="p-3 mb-3">
            <h5 className="mb-3">Filtrar por</h5>

            <Form.Group controlId="filtCrotal" className="mb-3">
              <Form.Label>Nº de crotal</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej. 0001"
                value={filtCrotal}
                onChange={(e) => setFiltCrotal(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="filtSexo" className="mb-3">
              <Form.Label>Sexo</Form.Label>
              <Form.Select
                value={filtSexo}
                onChange={(e) => setFiltSexo(e.target.value)}
              >
                <option value="">Todos</option>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="filtEdad" className="mb-3">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej. 2 años"
                value={filtEdad}
                onChange={(e) => setFiltEdad(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="filtRaza" className="mb-3">
              <Form.Label>Raza</Form.Label>
              <Form.Select
                value={filtRaza}
                onChange={(e) => setFiltRaza(e.target.value)}
              >
                <option value="">Todas</option>
                {razas.map((race) => (
                  <option key={race} value={race}>
                    {race}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Card>

          <Card className="p-3 mb-3">
            <h5 className="mb-3">Seleccione crotal a eliminar</h5>
            <Form.Group controlId="selCrotal" className="mb-3">
              <Form.Label>Crotal</Form.Label>
              <Form.Select
                value={selCrotal}
                onChange={e => setSelCrotal(e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                {listaActual.map(item => (
                  <option key={item.crotal} value={item.crotal}>
                    {item.crotal}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <div className="text-center">
              <Button variant="danger" onClick={handleShowModal}>
                Dar de baja ganado
              </Button>
            </div>
          </Card>
        </Col>

        {/* Tabla de resultados */}
        <Col md={9}>
          <Table bordered hover responsive className="bg-white">
            <thead>
              <tr>
                <th>Nº de crotal</th>
                <th>Sexo</th>
                <th>Edad</th>
                <th>Fecha de compra</th>
                <th>Peso</th>
                <th>Raza</th>
                <th>Cría</th>
                <th>Próximo parto</th>
              </tr>
            </thead>
            <tbody>
              {listaFiltrada.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.crotal}</td>
                  <td>{item.sexo}</td>
                  <td>{item.edad}</td>
                  <td>{item.fechaCompra}</td>
                  <td>{item.peso}</td>
                  <td>{item.raza}</td>
                  <td>{item.cria}</td>
                  <td>{item.proximoParto}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Modal de confirmación para dar de baja */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton style={{ backgroundColor: "#f8d7da" }}>
          <Modal.Title style={{ color: "#721c24" }}>
            Confirmar baja de ganado
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f8d7da", color: "#721c24" }}>
          ¿Estás seguro de que quieres dar de baja el animal con crotal “{selCrotal}”?
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#f8d7da" }}>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Confirmar baja
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ListaGanado;