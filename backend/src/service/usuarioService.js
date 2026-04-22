import { usuarioRepository } from "../repository/usuarioRepository.js";

export const usuarioService = {
    getAllUsuarios: async () => {
        const usuarios = await usuarioRepository.getAllUsuarios();
        return usuarios;
    },
    getUsuarioById: async (id) => {
        const usuario = await usuarioRepository.getUsuarioById(id);
        return usuario;
    },
    getUsuarioByNombre: async (nombre) => {
        const usuario = await usuarioRepository.getUsuarioByNombre(nombre);
        return usuario;
    },
    createUsuario: async (usuario) => {
        /* validar  que no lleguen datos vacios */
        if (!usuario.nom_usu || !usuario.cla_usu || !usuario.fky_rol || !usuario.fky_per || !usuario.est_usu) {
            throw new Error('Todos los campos son obligatorios');
        }
        const usuarios = await usuarioRepository.createUsuario(usuario);
        return usuarios;
    },
    updateUsuario: async (usuario) => {
        const usuarios = await usuarioRepository.updateUsuario(usuario);
        return usuarios;
    },
    deleteUsuario: async (id) => {
        const usuarios = await usuarioRepository.deleteUsuario(id);
        return usuarios;
    },
};