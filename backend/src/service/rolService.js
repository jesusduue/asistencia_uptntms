import { rolRepository } from "../repository/rolRepository.js";

export const rolService = {
    getAllRoles: async () => {
        const roles = await rolRepository.getAllRoles();
        return roles;
    },
    getRolById: async (id) => {
        const rol = await rolRepository.getRolById(id);
        return rol;
    },
    createRol: async (rol) => {
        /* validar que no lleguen datos vacios */
        if (!rol.nom_rol || !rol.est_rol) {
            throw new Error('Todos los campos son obligatorios');
        }
        const nuevoRol = await rolRepository.createRol(rol);
        return nuevoRol;
    },
    updateRol: async (rol) => {
        const rolActualizado = await rolRepository.updateRol(rol);
        return rolActualizado;
    },
    deleteRol: async (id) => {
        const rol = await rolRepository.deleteRol(id);
        return rol;
    },
};
