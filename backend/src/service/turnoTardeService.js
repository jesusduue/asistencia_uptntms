import { turnoTardeRepository } from "../repository/turnoTardeRepository.js";

export const turnoTardeService = {
    getAllTurnoTarde: async () => {
        const turnos = await turnoTardeRepository.getAllTurnoTarde();
        return turnos;
    },
    getTurnoTardeById: async (id) => {
        const turno = await turnoTardeRepository.getTurnoTardeById(id);
        return turno;
    },
    getTurnoTardeByFecha: async (fecha) => {
        const turnos = await turnoTardeRepository.getTurnoTardeByFecha(fecha);
        return turnos;
    },
    getTurnoTardeByPersonalYFecha: async (idPer, fecha) => {
        const turno = await turnoTardeRepository.getTurnoTardeByPersonalYFecha(idPer, fecha);
        return turno;
    },
    createTurnoTarde: async (turno) => {
        /* validar que no lleguen datos vacios */
        if (!turno.fec_asi_tt || !turno.fky_per || !turno.est_tt) {
            throw new Error('Los campos fecha, personal y estado son obligatorios');
        }
        const nuevoTurno = await turnoTardeRepository.createTurnoTarde(turno);
        return nuevoTurno;
    },
    updateTurnoTarde: async (turno) => {
        /* calcular horas trabajadas si se registra hora de salida */
        if (turno.tt_hor_lleg && turno.tt_hor_sal) {
            const horaLlegada = new Date(turno.tt_hor_lleg);
            const horaSalida = new Date(turno.tt_hor_sal);
            const diferenciaMs = horaSalida - horaLlegada;
            const horasTrabajadas = parseFloat((diferenciaMs / (1000 * 60 * 60)).toFixed(2));
            turno.hor_tra_tt = horasTrabajadas;
        }
        const turnoActualizado = await turnoTardeRepository.updateTurnoTarde(turno);
        return turnoActualizado;
    },
    deleteTurnoTarde: async (id) => {
        const turno = await turnoTardeRepository.deleteTurnoTarde(id);
        return turno;
    },
};
