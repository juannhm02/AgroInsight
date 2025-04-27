import { Router, Request, Response } from "express";
import { Ganado, IGanado } from "../models/Ganado";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Ganado:
 *       type: object
 *       required:
 *         - crotal
 *         - tipo
 *         - fechaNacimiento
 *       properties:
 *         id:
 *           type: string
 *           description: ID de MongoDB
 *         crotal:
 *           type: string
 *           description: Número de crotal del animal
 *         tipo:
 *           type: string
 *           description: Tipo de ganado (vacuno, ovino, etc.)
 *         fechaNacimiento:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento
 *         peso:
 *           type: number
 *           description: Peso en kilogramos
 *       example:
 *         crotal: "0001"
 *         tipo: "Vacuno"
 *         fechaNacimiento: "2024-06-04"
 *         peso: 350
 */

/**
 * @swagger
 * tags:
 *   name: Ganado
 *   description: Operaciones sobre el ganado
 */

/**
 * @swagger
 * /api/ganado:
 *   get:
 *     summary: Listar todo el ganado
 *     tags: [Ganado]
 *     responses:
 *       200:
 *         description: Array de animales
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ganado'
 */
router.get("/", async (_req: Request, res: Response) => {
  try {
    const list = await Ganado.find();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

/**
 * @swagger
 * /api/ganado/{id}:
 *   get:
 *     summary: Obtener un animal por su ID
 *     tags: [Ganado]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de MongoDB
 *     responses:
 *       200:
 *         description: Datos del animal
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ganado'
 *       404:
 *         description: No encontrado
 */
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const animal = await Ganado.findById(req.params.id);
    if (!animal) return res.status(404).json({ error: "No encontrado" });
    res.json(animal);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

/**
 * @swagger
 * /api/ganado:
 *   post:
 *     summary: Crear un nuevo animal
 *     tags: [Ganado]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ganado'
 *     responses:
 *       201:
 *         description: Animal creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ganado'
 *       400:
 *         description: Petición incorrecta
 */
router.post("/", async (req: Request, res: Response) => {
  try {
    const data: Partial<IGanado> = {
      crotal: req.body.crotal,
      tipo: req.body.tipo,
      fechaNacimiento: new Date(req.body.fechaNacimiento),
      peso: req.body.peso,
    };
    const nuevo = new Ganado(data);
    const saved = await nuevo.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

/**
 * @swagger
 * /api/ganado/{id}:
 *   put:
 *     summary: Actualizar un animal por su ID
 *     tags: [Ganado]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ganado'
 *     responses:
 *       200:
 *         description: Animal actualizado
 *       400:
 *         description: Petición incorrecta
 *       404:
 *         description: No encontrado
 */
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const update = {
      crotal: req.body.crotal,
      tipo: req.body.tipo,
      fechaNacimiento: new Date(req.body.fechaNacimiento),
      peso: req.body.peso,
    };
    const updated = await Ganado.findByIdAndUpdate(req.params.id, update, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "No encontrado" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

/**
 * @swagger
 * /api/ganado/{id}:
 *   delete:
 *     summary: Eliminar un animal por su ID
 *     tags: [Ganado]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Eliminado con éxito
 *       404:
 *         description: No encontrado
 */
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const del = await Ganado.findByIdAndDelete(req.params.id);
    if (!del) return res.status(404).json({ error: "No encontrado" });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

export default router;
