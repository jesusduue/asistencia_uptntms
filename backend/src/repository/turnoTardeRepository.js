import pool from '../config/conexion.js';
/* repositorio para manejar unicamente las consultas SQL de la tabla turno_tarde
 */

export const turnoTardeRepository = {
    // consulta para obtener todos los registros del turno tarde
    getAllTurnoTarde: async () => {
        const query = `SELECT tt.*, p.nom_per, p.ced_per 
            FROM turno_tarde tt 
            INNER JOIN personal p ON tt.fky_per = p.id_per`;
        const { rows } = await pool.query(query);
        return rows;
    },
    // consulta para obtener un registro por su id
    getTurnoTardeById: async (id) => {
        const query = `SELECT tt.*, p.nom_per, p.ced_per 
            FROM turno_tarde tt 
            INNER JOIN personal p ON tt.fky_per = p.id_per 
            WHERE tt.id_turn_tar = $1`;
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    },
    // consulta para obtener registros por fecha
    getTurnoTardeByFecha: async (fecha) => {
        const query = `SELECT tt.*, p.nom_per, p.ced_per 
            FROM turno_tarde tt 
            INNER JOIN personal p ON tt.fky_per = p.id_per 
            WHERE tt.fec_asi_tt = $1`;
        const { rows } = await pool.query(query, [fecha]);
        return rows;
    },
    // consulta para obtener registro por personal y fecha
    getTurnoTardeByPersonalYFecha: async (idPer, fecha) => {
        const query = `SELECT tt.*, p.nom_per, p.ced_per 
            FROM turno_tarde tt 
            INNER JOIN personal p ON tt.fky_per = p.id_per 
            WHERE tt.fky_per = $1 AND tt.fec_asi_tt = $2`;
        const { rows } = await pool.query(query, [idPer, fecha]);
        return rows[0];
    },
    // consulta para crear un registro de turno tarde
    createTurnoTarde: async (turno) => {
        const query = 'INSERT INTO turno_tarde (fec_asi_tt, fky_per, tt_hor_lleg, tt_hor_sal, hor_tra_tt, est_tt) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
        const { rows } = await pool.query(query, [turno.fec_asi_tt, turno.fky_per, turno.tt_hor_lleg, turno.tt_hor_sal, turno.hor_tra_tt, turno.est_tt]);
        return rows[0];
    },
    // consulta para actualizar un registro de turno tarde
    updateTurnoTarde: async (turno) => {
        const query = 'UPDATE turno_tarde SET fec_asi_tt = $1, fky_per = $2, tt_hor_lleg = $3, tt_hor_sal = $4, hor_tra_tt = $5, est_tt = $6 WHERE id_turn_tar = $7 RETURNING *';
        const { rows } = await pool.query(query, [turno.fec_asi_tt, turno.fky_per, turno.tt_hor_lleg, turno.tt_hor_sal, turno.hor_tra_tt, turno.est_tt, turno.id_turn_tar]);
        return rows[0];
    },
    // consulta para eliminar un registro de turno tarde
    deleteTurnoTarde: async (id) => {
        const query = 'DELETE FROM turno_tarde WHERE id_turn_tar = $1 RETURNING *';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    },

};
