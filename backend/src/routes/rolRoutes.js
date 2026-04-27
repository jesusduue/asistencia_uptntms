import { Router } from "express";
import { rolController } from "../controller/rolController.js";

const router = Router();

router.get('/', rolController.getAllRoles);
router.get('/:id', rolController.getRolById);
router.post('/', rolController.createRol);
router.put('/', rolController.updateRol);
router.delete('/:id', rolController.deleteRol);

export default router;
