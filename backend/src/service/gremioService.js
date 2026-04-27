import { gremioRepository } from "../repository/gremioRepository.js";

export const gremioService = {
    getAllGremios: async () => {
        const gremios = await gremioRepository.getAllGremios();
        return gremios;
    },
    getGremioById: async (id) => {
        const gremio = await gremioRepository.getGremioById(id);
        return gremio;
    },
    createGremio: async (gremio) => {
        /* validar que no lleguen datos vacios */
        if (!gremio.nom_grem || !gremio.carg_grem || !gremio.est_grem) {
            throw new Error('Todos los campos son obligatorios');
        }
        const nuevoGremio = await gremioRepository.createGremio(gremio);
        return nuevoGremio;
    },
    updateGremio: async (gremio) => {
        const gremioActualizado = await gremioRepository.updateGremio(gremio);
        return gremioActualizado;
    },
    deleteGremio: async (id) => {
        const gremio = await gremioRepository.deleteGremio(id);
        return gremio;
    },
};
