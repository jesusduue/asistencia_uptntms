import pool from '../config/conexion.js';
/* repositorio para manejar unicamente las consultas SQL de la tabla personal
 */

export const personalRepository = {
    // consulta para obtener todo el personal con datos del gremio
    getAllPersonal: async () => {
        const query = `SELECT p.*, g.nom_grem, g.carg_grem 
            FROM personal p 
            INNER JOIN gremio g ON p.fky_grem = g.id_grem`;
        const { rows } = await pool.query(query);
        return rows;
    },
    // consulta para obtener un personal por su id
    getPersonalById: async (id) => {
        const query = `SELECT p.*, g.nom_grem, g.carg_grem 
            FROM personal p 
            INNER JOIN gremio g ON p.fky_grem = g.id_grem 
            WHERE p.id_per = $1`;
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    },
    // consulta para obtener un personal por su cedula
    getPersonalByCedula: async (cedula) => {
        const query = `SELECT p.*, g.nom_grem, g.carg_grem 
            FROM personal p 
            INNER JOIN gremio g ON p.fky_grem = g.id_grem 
            WHERE p.ced_per = $1`;
        const { rows } = await pool.query(query, [cedula]);
        return rows[0];
    },
    // consulta para obtener personal por nombre (busqueda parcial)
    getPersonalByNombre: async (nombre) => {
        const query = `SELECT p.*, g.nom_grem, g.carg_grem 
            FROM personal p 
            INNER JOIN gremio g ON p.fky_grem = g.id_grem 
            WHERE LOWER(p.nom_per) LIKE LOWER($1)`;
        const { rows } = await pool.query(query, [`%${nombre}%`]);
        return rows;
    },
    // consulta para crear un personal
    createPersonal: async (personal) => {
        const query = 'INSERT INTO personal (ced_per, nom_per, fky_grem, est_per) VALUES ($1, $2, $3, $4) RETURNING *';
        const { rows } = await pool.query(query, [personal.ced_per, personal.nom_per, personal.fky_grem, personal.est_per]);
        return rows[0];
    },
    // consulta para actualizar un personal
    updatePersonal: async (personal) => {
        const query = 'UPDATE personal SET ced_per = $1, nom_per = $2, fky_grem = $3, est_per = $4 WHERE id_per = $5 RETURNING *';
        const { rows } = await pool.query(query, [personal.ced_per, personal.nom_per, personal.fky_grem, personal.est_per, personal.id_per]);
        return rows[0];
    },
    // consulta para eliminar un personal
    deletePersonal: async (id) => {
        const query = 'DELETE FROM personal WHERE id_per = $1 RETURNING *';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    },

};
