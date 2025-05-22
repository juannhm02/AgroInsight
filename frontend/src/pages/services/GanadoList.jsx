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
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";

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

  // State for "Alta Ganado Modal"
  const [showNewAnimalModal, setShowNewAnimalModal] = useState(false);
  const [newAnimal, setNewAnimal] = useState({
    tipo: "",
    crotal: "",
    sexo: "",
    edad: "",
    fechaCompra: "",
    peso: "",
    raza: "",
    cria: "",
    proximoParto: "",
  });
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [printFilters, setPrintFilters] = useState({ sexo: "", edad: "", year: "", raza: "" });
  const [editingId, setEditingId] = useState("");
  const [editedData, setEditedData] = useState({});
  const handleEditClick = (crotal, item) => {
    setEditingId(crotal);
    setEditedData({ ...item });
  };
  const handleCancelEdit = () => {
    setEditingId("");
    setEditedData({});
  };
  const handleSaveEdit = () => {
    // TODO: call API to persist editedData for editingId
    setListaActual(prev => prev.map(row => row.crotal === editingId ? editedData : row));
    setEditingId("");
    setEditedData({});
  };
  const handleShowPrintModal = () => setShowPrintModal(true);
  const handleClosePrintModal = () => setShowPrintModal(false);
  const handlePrintFilterChange = (e) => {
    const { name, value } = e.target;
    setPrintFilters(prev => ({ ...prev, [name]: value }));
  };
  const allGanadoTypes = ["vacuno", "porcino", "caprino", "bovino", "equino"]; // Example types

  const handleNewAnimalChange = (e) => {
    const { name, value } = e.target;
    setNewAnimal((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateAnimal = () => {
    setListaActual(prev => [...prev, newAnimal]);
    setNewAnimal({
      tipo: "",
      crotal: "",
      sexo: "",
      edad: "",
      fechaCompra: "",
      peso: "",
      raza: "",
      cria: "",
      proximoParto: "",
    });
    setShowNewAnimalModal(false);
  };

  const handlePrintListado = () => {
    handleClosePrintModal();
    // dejamos que el modal termine de cerrarse antes de imprimir
    setTimeout(() => window.print(), 100);
  };
  
    return (
      <React.Fragment>
      <Container className="py-5">
      <h1 className="mb-4">
        Explotación «{nombreExp}» –{" "}
        {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
      </h1>

      <Row>
        {/* Filtros y botón de baja */}
        <Col md={2}>
        <Card className="p-3 mb-3">
            <h5 className="mb-3">Gestión ganado</h5>
            <Button variant="success" className="mt-3 btn-alt-explotacion" onClick={() => setShowNewAnimalModal(true)}>
              Alta ganado
            </Button>
            <Button variant="success" className="mt-3 btn-alt-explotacion" onClick={handleShowPrintModal}>
              Imprimir listado
            </Button>
          </Card>
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
        </Col>

        {/* Tabla de resultados */}
        <Col md={9}>
          <Table striped bordered hover responsive className="bg-white" id="ganado-table">
            <thead>
              <tr>
                <th>Nº de crotal</th>
                <th>Sexo</th>
                <th>Edad</th>
                <th>Fecha de compra</th>
                <th>Peso</th>
                <th>Raza</th>
                <th>Madre</th>
                <th>Próximo parto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listaFiltrada.map((item, idx) => (
                <tr key={idx}>
                  {editingId === item.crotal ? (
                    <td>
                      <Form.Control
                        type="text"
                        value={editedData.crotal}
                        onChange={e => setEditedData(prev => ({ ...prev, crotal: e.target.value }))}
                      />
                    </td>
                  ) : (
                    <td>{item.crotal}</td>
                  )}
                  {editingId === item.crotal ? (
                    <td>
                      <Form.Select
                        value={editedData.sexo}
                        onChange={e => setEditedData(prev => ({ ...prev, sexo: e.target.value }))}
                      >
                        <option value="Macho">Macho</option>
                        <option value="Hembra">Hembra</option>
                      </Form.Select>
                    </td>
                  ) : (
                    <td>{item.sexo}</td>
                  )}
                  {editingId === item.crotal ? (
                    <td>
                      <Form.Control
                        type="text"
                        value={editedData.edad}
                        onChange={e => setEditedData(prev => ({ ...prev, edad: e.target.value }))}
                      />
                    </td>
                  ) : (
                    <td>{item.edad}</td>
                  )}
                  {editingId === item.crotal ? (
                    <td>
                      <Form.Control
                        type="date"
                        value={editedData.fechaCompra}
                        onChange={e => setEditedData(prev => ({ ...prev, fechaCompra: e.target.value }))}
                      />
                    </td>
                  ) : (
                    <td>{item.fechaCompra}</td>
                  )}
                  {editingId === item.crotal ? (
                    <td>
                      <Form.Control
                        type="text"
                        value={editedData.peso}
                        onChange={e => setEditedData(prev => ({ ...prev, peso: e.target.value }))}
                      />
                    </td>
                  ) : (
                    <td>{item.peso}</td>
                  )}
                  {editingId === item.crotal ? (
                    <td>
                      <Form.Control
                        type="text"
                        value={editedData.raza}
                        onChange={e => setEditedData(prev => ({ ...prev, raza: e.target.value }))}
                      />
                    </td>
                  ) : (
                    <td>{item.raza}</td>
                  )}
                  {editingId === item.crotal ? (
                    <td>
                      <Form.Control
                        type="text"
                        value={editedData.cria}
                        onChange={e => setEditedData(prev => ({ ...prev, cria: e.target.value }))}
                      />
                    </td>
                  ) : (
                    <td>{item.cria}</td>
                  )}
                  {editingId === item.crotal ? (
                    <td>
                      <Form.Control
                        type="date"
                        value={editedData.proximoParto}
                        onChange={e => setEditedData(prev => ({ ...prev, proximoParto: e.target.value }))}
                      />
                    </td>
                  ) : (
                    <td>{item.proximoParto}</td>
                  )}
                  <td className="text-center">
                    {editingId === item.crotal ? (
                      <>
                        <Button variant="success" size="sm" onClick={handleSaveEdit}>
                          <FaCheck />
                        </Button>{" "}
                        <Button variant="outline-secondary" size="sm" onClick={handleCancelEdit}>
                          <FaTimes />
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outline-primary" size="sm" onClick={() => handleEditClick(item.crotal, item)}>
                          <FaEdit />
                        </Button>{" "}
                        <Button variant="danger" size="sm" onClick={() => { setSelCrotal(item.crotal); handleShowModal(); }}>
                          <FaTrash />
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>

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

    {/* Alta Ganado Modal */}
    <Modal
    show={showNewAnimalModal}
    onHide={() => setShowNewAnimalModal(false)}
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>Alta Ganado</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        {/* <Form.Group controlId="animalTipo" className="mb-3">
          <Form.Label>Tipo de Ganado*</Form.Label>
          <Form.Control
            as="select"
            name="tipo"
            value={newAnimal.tipo}
            onChange={handleNewAnimalChange}
          >
            <option value="">Selecciona tipo</option>
            {allGanadoTypes.map(g => (
              <option key={g} value={g}>{g}</option>
            ))}
          </Form.Control>
        </Form.Group> */}
        <Form.Group controlId="animalCrotal" className="mb-3">
          <Form.Label>Nº de crotal*</Form.Label>
          <Form.Control
            type="text"
            name="crotal"
            value={newAnimal.crotal}
            onChange={handleNewAnimalChange}
          />
        </Form.Group>
        <Form.Group controlId="animalSexo" className="mb-3">
          <Form.Label>Sexo*</Form.Label>
          <Form.Control
            as="select"
            name="sexo"
            value={newAnimal.sexo}
            onChange={handleNewAnimalChange}
          >
            <option value="">Selecciona sexo</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="animalEdad" className="mb-3">
          <Form.Label>Edad*</Form.Label>
          <Form.Control
            type="text"
            name="edad"
            value={newAnimal.edad}
            onChange={handleNewAnimalChange}
          />
        </Form.Group>
        <Form.Group controlId="animalFechaCompra" className="mb-3">
          <Form.Label>Fecha de compra*</Form.Label>
          <Form.Control
            type="date"
            name="fechaCompra"
            value={newAnimal.fechaCompra}
            onChange={handleNewAnimalChange}
          />
        </Form.Group>
        <Form.Group controlId="animalPeso" className="mb-3">
          <Form.Label>Peso*</Form.Label>
          <Form.Control
            type="text"
            name="peso"
            value={newAnimal.peso}
            onChange={handleNewAnimalChange}
          />
        </Form.Group>
        <Form.Group controlId="animalRaza" className="mb-3">
          <Form.Label>Raza*</Form.Label>
          <Form.Control
            type="text"
            name="raza"
            value={newAnimal.raza}
            onChange={handleNewAnimalChange}
          />
        </Form.Group>
        <Form.Group controlId="animalCria" className="mb-3">
          <Form.Label>Cría</Form.Label>
          <Form.Control
            as="select"
            name="cria"
            value={newAnimal.cria}
            onChange={handleNewAnimalChange}
          >
            <option value="">Sin cría</option>
            {/* Placeholder: populate with existing crotales */}
            <option value="0001">0001</option>
            <option value="0002">0002</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="animalProximoParto" className="mb-3">
          <Form.Label>Próximo parto</Form.Label>
          <Form.Control
            type="date"
            name="proximoParto"
            value={newAnimal.proximoParto}
            onChange={handleNewAnimalChange}
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => setShowNewAnimalModal(false)}>
        Cancelar
      </Button>
      <Button variant="success" onClick={handleCreateAnimal}>
        Crear Ganado
      </Button>
    </Modal.Footer>
  </Modal>

  {/* Modal de impresión de listado */}
  <Modal show={showPrintModal} onHide={handleClosePrintModal} centered>
    <Modal.Header closeButton>
      <Modal.Title>Imprimir listado</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="printSexo" className="mb-3">
          <Form.Label>Sexo</Form.Label>
          <Form.Select name="sexo" value={printFilters.sexo} onChange={handlePrintFilterChange}>
            <option value="">Todos</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="printEdad" className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="text"
            name="edad"
            placeholder="Ej. 2 años"
            value={printFilters.edad}
            onChange={handlePrintFilterChange}
          />
        </Form.Group>
        <Form.Group controlId="printYear" className="mb-3">
          <Form.Label>Año de compra</Form.Label>
          <Form.Control
            type="number"
            name="year"
            placeholder="Ej. 2023"
            value={printFilters.year}
            onChange={handlePrintFilterChange}
          />
        </Form.Group>
        <Form.Group controlId="printRaza" className="mb-3">
          <Form.Label>Raza</Form.Label>
          <Form.Select name="raza" value={printFilters.raza} onChange={handlePrintFilterChange}>
            <option value="">Todas</option>
            {razas.map(race => (
              <option key={race} value={race}>
                {race}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClosePrintModal}>
        Cancelar
      </Button>
      <Button variant="success" onClick={handlePrintListado}>
        Imprimir
      </Button>
    </Modal.Footer>
  </Modal>
  </React.Fragment>
  );
};

export default ListaGanado;