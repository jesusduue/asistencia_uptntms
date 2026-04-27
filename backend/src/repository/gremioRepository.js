import pool from '../config/conexion.js';
/* repositorio para manejar unicamente las consultas SQL de la tabla gremio
 */

export const gremioRepository = {
    // consulta para obtener todos los gremios
    getAllGremios: async () => {
        const query = 'SELECT * FROM gremio';
        const { rows } = await pool.query(query);
        return rows;
    },
    // consulta para obtener un gremio por su id
    getGremioById: async (id) => {
        const query = 'SELECT * FROM gremio WHERE id_grem = $1';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    },
    // consulta para crear un gremio
    createGremio: async (gremio) => {
        const query = 'INSERT INTO gremio (nom_grem, carg_grem, est_grem) VALUES ($1, $2, $3) RETURNING *';
        const { rows } = await pool.query(query, [gremio.nom_grem, gremio.carg_grem, gremio.est_grem]);
        return rows[0];
    },
    // consulta para actualizar un gremio
    updateGremio: async (gremio) => {
        const query = 'UPDATE gremio SET nom_grem = $1, carg_grem = $2, est_grem = $3 WHERE id_grem = $4 RETURNING *';
        const { rows } = await pool.query(query, [gremio.nom_grem, gremio.carg_grem, gremio.est_grem, gremio.id_grem]);
        return rows[0];
    },
    // consulta para eliminar un gremio
    deleteGremio: async (id) => {
        const query = 'DELETE FROM gremio WHERE id_grem = $1 RETURNING *';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    },

};
