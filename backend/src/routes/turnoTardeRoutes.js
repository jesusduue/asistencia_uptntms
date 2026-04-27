import { Router } from "express";
import { turnoTardeController } from "../controller/turnoTardeController.js";

const router = Router();

router.get('/', turnoTardeController.getAllTurnoTarde);
router.get('/fecha/:fecha', turnoTardeController.getTurnoTardeByFecha);
router.get('/personal/:idPer/fecha/:fecha', turnoTardeController.getTurnoTardeByPersonalYFecha);
router.get('/:id', turnoTardeController.getTurnoTardeById);
router.post('/', turnoTardeController.createTurnoTarde);
router.put('/', turnoTardeController.updateTurnoTarde);
router.delete('/:id', turnoTardeController.deleteTurnoTarde);

export default router;
