import { personalService } from "../service/personalService.js";

export const personalController = {
    getAllPersonal: async (req, res) => {
        try{
            const personal = await personalService.getAllPersonal();
            res.status(200).json(personal);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    getPersonalById: async (req, res) => {
        try{
            const personal = await personalService.getPersonalById(req.params.id);
            res.status(200).json(personal);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    getPersonalByCedula: async (req, res) => {
        try{
            const personal = await personalService.getPersonalByCedula(req.params.cedula);
            res.status(200).json(personal);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    getPersonalByNombre: async (req, res) => {
        try{
            const personal = await personalService.getPersonalByNombre(req.params.nombre);
            res.status(200).json(personal);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    createPersonal: async (req, res) => {
        try{
            const body = req.body;
            const nuevoPersonal = await personalService.createPersonal(body);
            res.status(200).json(nuevoPersonal);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    updatePersonal: async (req, res) => {
        try{
            const body = req.body;
            const personalActualizado = await personalService.updatePersonal(body);
            res.status(200).json(personalActualizado);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    deletePersonal: async (req, res) => {
        try{
            const personal = await personalService.deletePersonal(req.params.id);
            res.status(200).json(personal);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
};
