import { rolService } from "../service/rolService.js";

export const rolController = {
    getAllRoles: async (req, res) => {
        try{
            const roles = await rolService.getAllRoles();
            res.status(200).json(roles);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    getRolById: async (req, res) => {
        try{
            const rol = await rolService.getRolById(req.params.id);
            res.status(200).json(rol);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    createRol: async (req, res) => {
        try{
            const body = req.body;
            const nuevoRol = await rolService.createRol(body);
            res.status(200).json(nuevoRol);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    updateRol: async (req, res) => {
        try{
            const body = req.body;
            const rolActualizado = await rolService.updateRol(body);
            res.status(200).json(rolActualizado);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    deleteRol: async (req, res) => {
        try{
            const rol = await rolService.deleteRol(req.params.id);
            res.status(200).json(rol);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
};
