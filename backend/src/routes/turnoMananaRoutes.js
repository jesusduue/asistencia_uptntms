import { Router } from "express";
import { turnoMananaController } from "../controller/turnoMananaController.js";

const router = Router();

router.get('/', turnoMananaController.getAllTurnoManana);
router.get('/fecha/:fecha', turnoMananaController.getTurnoMananaByFecha);
router.get('/personal/:idPer/fecha/:fecha', turnoMananaController.getTurnoMananaByPersonalYFecha);
router.get('/:id', turnoMananaController.getTurnoMananaById);
router.post('/', turnoMananaController.createTurnoManana);
router.put('/', turnoMananaController.updateTurnoManana);
router.delete('/:id', turnoMananaController.deleteTurnoManana);

export default router;
