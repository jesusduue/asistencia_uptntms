import pool from '../config/conexion.js';
/* repositorio para manejar unicamente las consultas SQL de la tabla turno_mañana
 */

export const turnoMananaRepository = {
    // consulta para obtener todos los registros del turno mañana
    getAllTurnoManana: async () => {
        const query = `SELECT tm.*, p.nom_per, p.ced_per 
            FROM turno_mañana tm 
            INNER JOIN personal p ON tm.fky_per = p.id_per`;
        const { rows } = await pool.query(query);
        return rows;
    },
    // consulta para obtener un registro por su id
    getTurnoMananaById: async (id) => {
        const query = `SELECT tm.*, p.nom_per, p.ced_per 
            FROM turno_mañana tm 
            INNER JOIN personal p ON tm.fky_per = p.id_per 
            WHERE tm.id_turn_man = $1`;
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    },
    // consulta para obtener registros por fecha
    getTurnoMananaByFecha: async (fecha) => {
        const query = `SELECT tm.*, p.nom_per, p.ced_per 
            FROM turno_mañana tm 
            INNER JOIN personal p ON tm.fky_per = p.id_per 
            WHERE tm.fec_asi_tm = $1`;
        const { rows } = await pool.query(query, [fecha]);
        return rows;
    },
    // consulta para obtener registro por personal y fecha
    getTurnoMananaByPersonalYFecha: async (idPer, fecha) => {
        const query = `SELECT tm.*, p.nom_per, p.ced_per 
            FROM turno_mañana tm 
            INNER JOIN personal p ON tm.fky_per = p.id_per 
            WHERE tm.fky_per = $1 AND tm.fec_asi_tm = $2`;
        const { rows } = await pool.query(query, [idPer, fecha]);
        return rows[0];
    },
    // consulta para crear un registro de turno mañana
    createTurnoManana: async (turno) => {
        const query = 'INSERT INTO turno_mañana (fec_asi_tm, fky_per, tm_hor_lleg, tm_hor_sal, hor_tra_tm, est_tm) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
        const { rows } = await pool.query(query, [turno.fec_asi_tm, turno.fky_per, turno.tm_hor_lleg, turno.tm_hor_sal, turno.hor_tra_tm, turno.est_tm]);
        return rows[0];
    },
    // consulta para actualizar un registro de turno mañana
    updateTurnoManana: async (turno) => {
        const query = 'UPDATE turno_mañana SET fec_asi_tm = $1, fky_per = $2, tm_hor_lleg = $3, tm_hor_sal = $4, hor_tra_tm = $5, est_tm = $6 WHERE id_turn_man = $7 RETURNING *';
        const { rows } = await pool.query(query, [turno.fec_asi_tm, turno.fky_per, turno.tm_hor_lleg, turno.tm_hor_sal, turno.hor_tra_tm, turno.est_tm, turno.id_turn_man]);
        return rows[0];
    },
    // consulta para eliminar un registro de turno mañana
    deleteTurnoManana: async (id) => {
        const query = 'DELETE FROM turno_mañana WHERE id_turn_man = $1 RETURNING *';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    },

};
