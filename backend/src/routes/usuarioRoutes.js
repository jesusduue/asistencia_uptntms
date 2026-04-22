import { Router } from "express";
import { usuarioController } from "../controller/usuarioController.js";

const router = Router();

router.get('/', usuarioController.getAllUsuarios);
router.get('/:id', usuarioController.getUsuarioById);
router.get('/:nombre', usuarioController.getUsuarioByNombre);
router.post('/', usuarioController.createUsuario);
router.put('/', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

export default router;