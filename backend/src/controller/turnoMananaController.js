import { turnoMananaService } from "../service/turnoMananaService.js";

export const turnoMananaController = {
    getAllTurnoManana: async (req, res) => {
        try{
            const turnos = await turnoMananaService.getAllTurnoManana();
            res.status(200).json(turnos);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    getTurnoMananaById: async (req, res) => {
        try{
            const turno = await turnoMananaService.getTurnoMananaById(req.params.id);
            res.status(200).json(turno);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    getTurnoMananaByFecha: async (req, res) => {
        try{
            const turnos = await turnoMananaService.getTurnoMananaByFecha(req.params.fecha);
            res.status(200).json(turnos);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    getTurnoMananaByPersonalYFecha: async (req, res) => {
        try{
            const turno = await turnoMananaService.getTurnoMananaByPersonalYFecha(req.params.idPer, req.params.fecha);
            res.status(200).json(turno);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    createTurnoManana: async (req, res) => {
        try{
            const body = req.body;
            const nuevoTurno = await turnoMananaService.createTurnoManana(body);
            res.status(200).json(nuevoTurno);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    updateTurnoManana: async (req, res) => {
        try{
            const body = req.body;
            const turnoActualizado = await turnoMananaService.updateTurnoManana(body);
            res.status(200).json(turnoActualizado);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    deleteTurnoManana: async (req, res) => {
        try{
            const turno = await turnoMananaService.deleteTurnoManana(req.params.id);
            res.status(200).json(turno);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
};
