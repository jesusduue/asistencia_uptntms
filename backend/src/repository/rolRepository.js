import pool from '../config/conexion.js';
/* repositorio para manejar unicamente las consultas SQL de la tabla rol
 */

export const rolRepository = {
    // consulta para obtener todos los roles
    getAllRoles: async () => {
        const query = 'SELECT * FROM rol';
        const { rows } = await pool.query(query);
        return rows;
    },
    // consulta para obtener un rol por su id
    getRolById: async (id) => {
        const query = 'SELECT * FROM rol WHERE id_rol = $1';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    },
    // consulta para crear un rol
    createRol: async (rol) => {
        const query = 'INSERT INTO rol (nom_rol, est_rol) VALUES ($1, $2) RETURNING *';
        const { rows } = await pool.query(query, [rol.nom_rol, rol.est_rol]);
        return rows[0];
    },
    // consulta para actualizar un rol
    updateRol: async (rol) => {
        const query = 'UPDATE rol SET nom_rol = $1, est_rol = $2 WHERE id_rol = $3 RETURNING *';
        const { rows } = await pool.query(query, [rol.nom_rol, rol.est_rol, rol.id_rol]);
        return rows[0];
    },
    // consulta para eliminar un rol
    deleteRol: async (id) => {
        const query = 'DELETE FROM rol WHERE id_rol = $1 RETURNING *';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    },

};
