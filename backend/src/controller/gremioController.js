import { gremioService } from "../service/gremioService.js";

export const gremioController = {
    getAllGremios: async (req, res) => {
        try{
            const gremios = await gremioService.getAllGremios();
            res.status(200).json(gremios);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    getGremioById: async (req, res) => {
        try{
            const gremio = await gremioService.getGremioById(req.params.id);
            res.status(200).json(gremio);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    createGremio: async (req, res) => {
        try{
            const body = req.body;
            const nuevoGremio = await gremioService.createGremio(body);
            res.status(200).json(nuevoGremio);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    updateGremio: async (req, res) => {
        try{
            const body = req.body;
            const gremioActualizado = await gremioService.updateGremio(body);
            res.status(200).json(gremioActualizado);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    deleteGremio: async (req, res) => {
        try{
            const gremio = await gremioService.deleteGremio(req.params.id);
            res.status(200).json(gremio);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
};
