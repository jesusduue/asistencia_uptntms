import { personalRepository } from "../repository/personalRepository.js";

export const personalService = {
    getAllPersonal: async () => {
        const personal = await personalRepository.getAllPersonal();
        return personal;
    },
    getPersonalById: async (id) => {
        const personal = await personalRepository.getPersonalById(id);
        return personal;
    },
    getPersonalByCedula: async (cedula) => {
        const personal = await personalRepository.getPersonalByCedula(cedula);
        return personal;
    },
    getPersonalByNombre: async (nombre) => {
        const personal = await personalRepository.getPersonalByNombre(nombre);
        return personal;
    },
    createPersonal: async (personal) => {
        /* validar que no lleguen datos vacios */
        if (!personal.ced_per || !personal.nom_per || !personal.fky_grem || !personal.est_per) {
            throw new Error('Todos los campos son obligatorios');
        }
        const nuevoPersonal = await personalRepository.createPersonal(personal);
        return nuevoPersonal;
    },
    updatePersonal: async (personal) => {
        const personalActualizado = await personalRepository.updatePersonal(personal);
        return personalActualizado;
    },
    deletePersonal: async (id) => {
        const personal = await personalRepository.deletePersonal(id);
        return personal;
    },
};
