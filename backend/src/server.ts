// backend/src/server.ts
import dotenv from "dotenv";
import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Importa tus rutas TS
import authRoutes from "./routes/auth";
import ganadoRoutes from "./routes/ganado";

dotenv.config({ path: __dirname + "/../.env" });

const app: Application = express();
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || "";

// ─── Middlewares ─────────────────────────────────────────────────────────────
app.use(cors());
app.use(bodyParser.json());

// ─── Conexión a MongoDB ───────────────────────────────────────────────────────
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ─── Swagger/OpenAPI ──────────────────────────────────────────────────────────
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "AgroInsight API",
    version: "1.0.0",
    description: "🎯 API REST para la gestión ganadera inteligente | AgroInsight",
  },
  servers: [
    { url: `http://localhost:${PORT}`, description: "Servidor local" },
  ],
};

const swaggerOptions = {
  swaggerDefinition,
  apis: [__dirname + "/routes/*.ts", __dirname + "/models/*.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const swaggerUiOptions = {
  customSiteTitle: "AgroInsight API Docs",
  customCss: `
    /* Topbar */
    .swagger-ui .topbar { background-color: #1a4c28; }
    .swagger-ui .topbar .topbar-wrapper .link img { display: none; }
    .swagger-ui .topbar .topbar-wrapper .topbar-title {
      font-size: 1.8rem; color: #ffffff;
    }

    /* Headers */
    .swagger-ui .info h1, .swagger-ui .info h2 { color: #368d44; }

    /* Buttons */
    .swagger-ui .btn {
      background-color: #368d44;
      color: white;
      border: none;
      border-radius: 0.5rem;
    }
    .swagger-ui .btn:hover {
      background-color: #2b6d35;
    }
  `,
};

// Monta Swagger UI en la raíz
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));

// ─── Rutas de Autenticación ─────────────────────────────────────────────────
app.use("/api/auth", authRoutes);

// ─── Rutas de Ganado ─────────────────────────────────────────────────────────
app.use("/api/ganado", ganadoRoutes);

// ─── Aquí puedes añadir más rutas ────────────────────────────────────────────
// app.use("/api/saneamientos", require("./routes/saneamientos"));
// app.use("/api/finanzas", require("./routes/finanzas"));
// etc.

// ─── Arranca el servidor ───────────────────────────────────────────────────────
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}/`)
);
