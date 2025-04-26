# AgroInsight

AgroInsight es una plataforma web integral de gestión ganadera que permite a los usuarios administrar explotaciones, controlar el ganado, llevar la contabilidad económica y supervisar cinegética desde una única aplicación moderna y responsive.

---

## 🚀 Características principales

- **Gestión de explotaciones**  
  Crear, editar y eliminar fincas y sus responsables.

- **Control de ganado**  
  Alta, baja y edición de animales, con historial de peso, edad y raza.

- **Cinegética**  
  Seguimiento de poblaciones cinegéticas y planificación de batidas.

- **Módulo económico**  
  Registro y análisis de ingresos y gastos por explotación.

- **Monitoreo en tiempo real**  
  Ubicación de animales mediante sensores GPS (futuras mejoras).

- **Autenticación y autorización**  
  Registro, login y roles (usuario/administrador) con JWT.

---

## 🔨 Tecnologías

- **Backend**: Node.js, Express  
- **Base de datos**: MongoDB (Atlas)  
- **Frontend**: React, React-Bootstrap, React-Router  
- **Autenticación**: JSON Web Tokens (JWT)  
- **Estilos**: Bootstrap 5, CSS Custom Properties  
- **Control de versiones**: Git & GitHub  

---

## 🛠️ Instalación y puesta en marcha

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/juannhm02/AgroInsight.git
   cd AgroInsight

2. **Backend**
    ```bash
    cd backend
    npm install
    # Crea un archivo .env con:
    #   MONGO_URI=<tu_uri_mongodb>
    #   JWT_SECRET=<tu_secreto>
    npm start

3. **Frontend**
    ```bash
    cd ../frontend
    npm install
    npm start

4. **Accede**
    1. Backend en: http://localhost:5001
    1. Frontend en: http://localhost:3000

## 📁 Estructura de carpetas

AgroInsight/
├─ backend/           # API REST con Node.js & Express
│  ├─ models/         # Esquemas de Mongoose
│  ├─ routes/         # Rutas del servidor
│  ├─ server.js       # Punto de entrada
│  └─ .env            # Variables de entorno
├─ frontend/          # App en React
│  ├─ public/         # Assets públicos
│  ├─ src/
│  │  ├─ components/  # Navbar, Layout, etc.
│  │  ├─ pages/       # Home, Servicios, Sobre, Contacto
│  │  ├─ App.js       # Enrutamiento
│  │  └─ index.css    # Estilos globales
│  └─ package.json
└─ README.md          # (este archivo)


## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## ✉️ Contacto

Juan Higuera Mohedano – i02himoj@uco.es
Proyecto TFG – Universidad de Córdoba