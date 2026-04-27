import { turnoMananaRepository } from "../repository/turnoMananaRepository.js";

export const turnoMananaService = {
    getAllTurnoManana: async () => {
        const turnos = await turnoMananaRepository.getAllTurnoManana();
        return turnos;
    },
    getTurnoMananaById: async (id) => {
        const turno = await turnoMananaRepository.getTurnoMananaById(id);
        return turno;
    },
    getTurnoMananaByFecha: async (fecha) => {
        const turnos = await turnoMananaRepository.getTurnoMananaByFecha(fecha);
        return turnos;
    },
    getTurnoMananaByPersonalYFecha: async (idPer, fecha) => {
        const turno = await turnoMananaRepository.getTurnoMananaByPersonalYFecha(idPer, fecha);
        return turno;
    },
    createTurnoManana: async (turno) => {
        /* validar que no lleguen datos vacios */
        if (!turno.fec_asi_tm || !turno.fky_per || !turno.est_tm) {
            throw new Error('Los campos fecha, personal y estado son obligatorios');
        }
        const nuevoTurno = await turnoMananaRepository.createTurnoManana(turno);
        return nuevoTurno;
    },
    updateTurnoManana: async (turno) => {
        /* calcular horas trabajadas si se registra hora de salida */
        if (turno.tm_hor_lleg && turno.tm_hor_sal) {
            const horaLlegada = new Date(turno.tm_hor_lleg);
            const horaSalida = new Date(turno.tm_hor_sal);
            const diferenciaMs = horaSalida - horaLlegada;
            const horasTrabajadas = parseFloat((diferenciaMs / (1000 * 60 * 60)).toFixed(2));
            turno.hor_tra_tm = horasTrabajadas;
        }
        const turnoActualizado = await turnoMananaRepository.updateTurnoManana(turno);
        return turnoActualizado;
    },
    deleteTurnoManana: async (id) => {
        const turno = await turnoMananaRepository.deleteTurnoManana(id);
        return turno;
    },
};
