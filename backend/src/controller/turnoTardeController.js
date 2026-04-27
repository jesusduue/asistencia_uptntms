import { turnoTardeService } from "../service/turnoTardeService.js";

export const turnoTardeController = {
    getAllTurnoTarde: async (req, res) => {
        try{
            const turnos = await turnoTardeService.getAllTurnoTarde();
            res.status(200).json(turnos);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    getTurnoTardeById: async (req, res) => {
        try{
            const turno = await turnoTardeService.getTurnoTardeById(req.params.id);
            res.status(200).json(turno);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    getTurnoTardeByFecha: async (req, res) => {
        try{
            const turnos = await turnoTardeService.getTurnoTardeByFecha(req.params.fecha);
            res.status(200).json(turnos);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    getTurnoTardeByPersonalYFecha: async (req, res) => {
        try{
            const turno = await turnoTardeService.getTurnoTardeByPersonalYFecha(req.params.idPer, req.params.fecha);
            res.status(200).json(turno);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    createTurnoTarde: async (req, res) => {
        try{
            const body = req.body;
            const nuevoTurno = await turnoTardeService.createTurnoTarde(body);
            res.status(200).json(nuevoTurno);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    updateTurnoTarde: async (req, res) => {
        try{
            const body = req.body;
            const turnoActualizado = await turnoTardeService.updateTurnoTarde(body);
            res.status(200).json(turnoActualizado);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    deleteTurnoTarde: async (req, res) => {
        try{
            const turno = await turnoTardeService.deleteTurnoTarde(req.params.id);
            res.status(200).json(turno);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
};
