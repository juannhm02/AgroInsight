// src/pages/services/ganadera.jsx
import React, { useState } from "react";
import { Container, Accordion, Button, Modal, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const initialExplotaciones = [
  { id: 1, name: "Dehesa del Rey",   ganado: ["Vacuno", "Porcino", "Caprino", "Bovino", "Equino"], responsable: "Juan Pérez" },
  { id: 2, name: "Alcarria",         ganado: ["Vacuno", "Porcino", "Caprino", "Bovino", "Equino"], responsable: "Ana Gómez"  },
  { id: 3, name: "Majuelo",          ganado: ["Vacuno", "Porcino", "Caprino", "Bovino", "Equino"], responsable: "Luis Martínez"  },
  { id: 4, name: "Laureano",         ganado: ["Vacuno", "Porcino", "Caprino", "Bovino", "Equino"], responsable: "Marta Ruiz"  },
  { id: 5, name: "Camino Real",      ganado: ["Vacuno", "Porcino", "Caprino", "Bovino", "Equino"], responsable: "Carlos López"  },
];

const AdministracionGanadera = () => {
  const [explotaciones, setExplotaciones] = useState(initialExplotaciones);
  const [showNewExpModal, setShowNewExpModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState("");

  // Filter states
  const [filterName, setFilterName] = useState("");
  const [filterType, setFilterType] = useState("Todos");
  const [filterResp, setFilterResp] = useState("");
  const [filterCrotal, setFilterCrotal] = useState("");

  // Estado y manejadores para "Alta Explotación"
  const [newExp, setNewExp] = useState({ name: "", total: "", responsable: "", observaciones: "" });
  const handleNewExpChange = (e) => {
    const { name, value } = e.target;
    setNewExp(prev => ({ ...prev, [name]: value }));
  };
  const handleCreateExp = () => {
    if (!newExp.name) return;
    const newId = explotaciones.length ? Math.max(...explotaciones.map(e => e.id)) + 1 : 1;
    setExplotaciones(prev => [
      ...prev,
      { id: newId, name: newExp.name, ganado: [], responsable: newExp.responsable, observaciones: newExp.observaciones }
    ]);
    setShowNewExpModal(false);
    setNewExp({ name: "", total: "", responsable: "", observaciones: "" });
  };

  // Estado para saber en qué explotación se da de alta el animal
  const [currentExpId, setCurrentExpId] = useState(null);

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

  const handleNewAnimalChange = (e) => {
    const { name, value } = e.target;
    setNewAnimal(prev => ({ ...prev, [name]: value }));
  };

  // Compute unique ganado types for filter
  const allGanadoTypes = Array.from(
    new Set(explotaciones.flatMap((exp) => exp.ganado))
  );

  // Filtering logic
  const filteredExplotaciones = explotaciones.filter((exp) => {
    const nameMatch = exp.name.toLowerCase().includes(filterName.trim().toLowerCase());
    const respMatch = exp.responsable
      ? exp.responsable.toLowerCase().includes(filterResp.trim().toLowerCase())
      : false;
    const typeMatch =
      filterType === "Todos" || exp.ganado.some((g) => g === filterType);
    // filterCrotal is ignored for filtering
    return nameMatch && respMatch && typeMatch;
  });

  // Delete exploitation handler
  const handleConfirmDelete = () => {
    setExplotaciones((exps) => exps.filter((e) => e.name !== deleteTarget));
    setShowDeleteModal(false);
    setDeleteTarget("");
  };

  return (
    <>
      <Container className="py-5">
        <h1 className="mb-4">Administración ganadera</h1>

        {/* Filter Controls */}
        <Form className="mb-4 d-flex flex-wrap gap-3">
          <Form.Group controlId="filterName">
            <Form.Label>Nombre de explotación</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buscar por nombre"
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="filterType">
            <Form.Label>Tipo de ganado</Form.Label>
            <Form.Select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="Todos">Todos</option>
              {allGanadoTypes.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="filterResp">
            <Form.Label>Responsable</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buscar por responsable"
              value={filterResp}
              onChange={(e) => setFilterResp(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="filterCrotal">
            <Form.Label>Nº de crotal</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buscar por Nº de crotal"
              value={filterCrotal}
              onChange={(e) => setFilterCrotal(e.target.value)}
            />
          </Form.Group>
        </Form>

        {/* Delete Button */}
        <Button
          variant="danger"
          className="mb-4"
          onClick={() => setShowDeleteModal(true)}
        >
          Dar de baja explotación
        </Button>

        <Accordion defaultActiveKey="0" className="mb-4">
          {filteredExplotaciones.map((exp, idx) => (
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
                <div>
                  <strong>Responsable:</strong> {exp.responsable}
                </div>
                <Button
                  variant="success"
                  className="mt-3 btn-alt-explotacion"
                  onClick={() => {
                    setCurrentExpId(exp.id);
                    setShowNewAnimalModal(true);
                  }}
                >
                  Dar de alta ganado
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <Button
          variant="success"
          className="mt-3 btn-alt-explotacion"
          onClick={() => setShowNewExpModal(true)}
        >
          Dar de alta explotación
        </Button>
      </Container>

      {/* Alta Explotación Modal (Unchanged) */}
      <Modal
        show={showNewExpModal}
        onHide={() => setShowNewExpModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Alta Explotación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="expNombre" className="mb-3">
              <Form.Label>Nombre*</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Nombre de la explotación"
                value={newExp.name}
                onChange={handleNewExpChange}
              />
            </Form.Group>
            <Form.Group controlId="expTotal" className="mb-3">
              <Form.Label>Nº total de ganado*</Form.Label>
              <Form.Control
                type="number"
                name="total"
                placeholder="Total de animales"
                value={newExp.total}
                onChange={handleNewExpChange}
              />
            </Form.Group>
            <Form.Group controlId="expResponsable" className="mb-3">
              <Form.Label>Responsable*</Form.Label>
              <Form.Control
                type="text"
                name="responsable"
                placeholder="Nombre del responsable"
                value={newExp.responsable}
                onChange={handleNewExpChange}
              />
            </Form.Group>
            <Form.Group controlId="expObservaciones" className="mb-3">
              <Form.Label>Observaciones</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="observaciones"
                placeholder="Escriba sus observaciones"
                value={newExp.observaciones}
                onChange={handleNewExpChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowNewExpModal(false)}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleCreateExp}>
            Crear
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Baja Explotación Modal */}
      <Modal
        show={showDeleteModal}
        onHide={() => {
          setShowDeleteModal(false);
          setDeleteTarget("");
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Baja Explotación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="deleteSelect">
              <Form.Label>Selecciona la explotación a eliminar</Form.Label>
              <Form.Select
                value={deleteTarget}
                onChange={(e) => setDeleteTarget(e.target.value)}
              >
                <option value="">Seleccione...</option>
                {filteredExplotaciones.map((exp) => (
                  <option key={exp.id} value={exp.name}>
                    {exp.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
          {deleteTarget && (
            <div className="mt-3 p-3 bg-success text-white rounded">
              Está seguro de que desea eliminar la explotación "{deleteTarget}", se eliminarán todos sus datos permanentemente.
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={handleConfirmDelete}
            disabled={!deleteTarget}
          >
            Eliminar
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setShowDeleteModal(false);
              setDeleteTarget("");
            }}
          >
            Volver
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
            <Form.Group controlId="animalTipo" className="mb-3">
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
            </Form.Group>
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
          <Button variant="success" onClick={() => setShowNewAnimalModal(false)}>
            Crear Ganado
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdministracionGanadera;
