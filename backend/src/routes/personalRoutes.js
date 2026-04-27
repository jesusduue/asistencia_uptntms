import { Router } from "express";
import { personalController } from "../controller/personalController.js";

const router = Router();

router.get('/', personalController.getAllPersonal);
router.get('/cedula/:cedula', personalController.getPersonalByCedula);
router.get('/nombre/:nombre', personalController.getPersonalByNombre);
router.get('/:id', personalController.getPersonalById);
router.post('/', personalController.createPersonal);
router.put('/', personalController.updatePersonal);
router.delete('/:id', personalController.deletePersonal);

export default router;
