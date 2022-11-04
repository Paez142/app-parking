import { Router } from "express";
import {
  getUsuarios,
  createUsuarios,
  updateUsuarios,
  deleteUsuarios,
  getUsuario,
} from "../controllers/usuarios.controllers.js";

const router = Router();

router.get("/usuarios", getUsuarios);
router.get("/usuarios/:id", getUsuario);

router.post("/usuarios", createUsuarios);

router.patch("/usuarios/:id", updateUsuarios); //actualiza parcialmente el registro con patch

router.delete("/usuarios/:id", deleteUsuarios);

export default router;
