import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const Login = () => {
  const navigate = useNavigate(); // Inicializa useNavigate

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    setErrors({});
    setServerError("");

    const newErrors = {};
    const usernameRegex = /^[A-Za-z\s]+$/;

    if (!username.trim()) {
      newErrors.username = "El nombre de usuario es obligatorio";
    } else if (!usernameRegex.test(username)) {
      newErrors.username = "El nombre de usuario solo puede contener letras y espacios";
    }

    if (!password) {
      newErrors.password = "La contraseña es obligatoria";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        navigate("/"); // Redirige a la ruta raíz
      } else {
        setServerError("Credenciales inválidas");
      }
    } catch (error) {
      setServerError("Error del servidor. Inténtalo de nuevo más tarde.");
    }
  };

  return (
    <Container fluid className="p-0">
      <Row className="g-0 vh-100">
        {/* =========== LADO IZQUIERDO ============= */}
        <Col md={6} className="position-relative d-flex bg-white">
          {/* logo circular en esquina */}
          <img
            src="/LOGO.png"
            alt="AgroInsight Mini"
            className="position-absolute top-0 start-0 m-3"
            width={40}
            height={40}
          />
          {/* logo principal centrado */}
          <div className="m-auto">
            <img
              src="/home.png"
              alt="AgroInsight"
              className="img-fluid mw-100"
              style={{ maxWidth: "300px" }}
            />
          </div>
        </Col>

        {/* =========== LADO DERECHO ============= */}
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center bg-primary text-white"
        >
          <div className="w-75">
            <h2 className="mb-4">Bienvenido de nuevo</h2>
            <p>
              ¿Aún no tienes cuenta?{" "}
              <a href="/register" className="text-secondary">
                Solicita registro
              </a>
            </p>

            <Form noValidate onSubmit={handleLogin}>
              <Form.Group controlId="username" className="mb-3">
                <Form.Label className="text-white">Nombre de usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduce tu nombre de usuario"
                  className="rounded-pill bg-secondary bg-opacity-50 border-0 text-white"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  isInvalid={!!errors.username}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username || "Por favor introduce un nombre de usuario válido."}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="password" className="mb-3">
                <Form.Label className="text-white">Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Introduce tu contraseña"
                  className="rounded-pill bg-secondary bg-opacity-50 border-0 text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={!!errors.password}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password || "Por favor introduce tu contraseña."}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                controlId="remember"
                className="mb-3 d-flex justify-content-between align-items-center"
              >
                <Form.Check 
                  label="Mantenerme logueado" 
                  className="text-white" 
                />
                <a href="/forgot" className="text-secondary">
                  ¿Has olvidado la contraseña?
                </a>
              </Form.Group>

              {serverError && (
                <div className="text-danger mb-3">{serverError}</div>
              )}

              <Button
                variant="outline-light"
                type="submit"
                className="w-100 rounded-pill py-2 fw-bold"
              >
                Acceso
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
