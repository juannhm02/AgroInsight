import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User, IUser } from "../models/User";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "secreto";

// --- Register ---
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Autenticación y registro
 */
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             required: [username,password,email]
 *             properties:
 *               username: { type: string }
 *               password: { type: string }
 *               location: { type: string }
 *               farms: { type: integer }
 *               dni: { type: string }
 *               email: { type: string }
 *     responses:
 *       201: { description: Usuario creado }
 *       400: { description: Error de validación }
 */
router.post("/register", async (req: Request, res: Response) => {
  const { username, password, location, farms, dni, email } = req.body;
  if (!username || !password || !email)
    return res.status(400).json({ error: "username, password y email son obligatorios" });

  try {
    const exists = await User.findOne({ $or: [{ username }, { email }] });
    if (exists) return res.status(400).json({ error: "Usuario o email ya existe" });

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({ username, passwordHash, location, farms, dni, email });
    await newUser.save();
    return res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
});

// --- Login ---
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Autentica un usuario y devuelve token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             required: [username,password]
 *             properties:
 *               username: { type: string }
 *               password: { type: string }
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 token: { type: string }
 *       401: { description: Credenciales inválidas }
 */
router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "username y password son obligatorios" });

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ error: "Credenciales inválidas" });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: "Credenciales inválidas" });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      JWT_SECRET,
      { expiresIn: "8h" }
    );
    return res.json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default router;
