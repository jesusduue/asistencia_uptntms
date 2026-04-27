import pool from '../config/conexion.js';
/* repositorio para manejar unicamente las consultas SQL
 */

export const usuarioRepository = {
    // consulta para obtener todos los usuarios
    getAllUsuarios: async () => {
        const query = 'SELECT * FROM usuario';
        const { rows } = await pool.query(query);
        return rows;
    },
    // consulta para obtener un usuario por su id
    getUsuarioById: async (id) => {
        const query = 'SELECT * FROM usuario WHERE id_usu = $1';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    },
    // consulta para obtener un usuario por su nombre de usuario
    getUsuarioByNombre: async (nombre) => {
        const query = 'SELECT * FROM usuario WHERE nom_usu = $1';
        const { rows } = await pool.query(query, [nombre]);
        return rows[0];
    },
    // consulta para crear un usuario
    createUsuario: async (usuario) => {
        const query = 'INSERT INTO usuario (nom_usu, cla_usu, fky_rol, fky_per, est_usu) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const { rows } = await pool.query(query, [usuario.nom_usu, usuario.cla_usu, usuario.fky_rol, usuario.fky_per, usuario.est_usu]);
        return rows[0];
    },
    // consulta para actualizar un usuario
    updateUsuario: async (usuario) => {
        const query = 'UPDATE usuario SET nom_usu = $1, cla_usu = $2, fky_rol = $3, fky_per = $4, est_usu = $5 WHERE id_usu = $6 RETURNING *';
        const { rows } = await pool.query(query, [usuario.nom_usu, usuario.cla_usu, usuario.fky_rol, usuario.fky_per, usuario.est_usu, usuario.id_usu]);
        return rows[0];
    },
    // consulta para eliminar un usuario
    deleteUsuario: async (id) => {
        const query = 'DELETE FROM usuario WHERE id_usu = $1 RETURNING *';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    },

};