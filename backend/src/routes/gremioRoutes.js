import { Router } from "express";
import { gremioController } from "../controller/gremioController.js";

const router = Router();

router.get('/', gremioController.getAllGremios);
router.get('/:id', gremioController.getGremioById);
router.post('/', gremioController.createGremio);
router.put('/', gremioController.updateGremio);
router.delete('/:id', gremioController.deleteGremio);

export default router;
