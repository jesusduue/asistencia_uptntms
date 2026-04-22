import { usuarioService } from "../service/usuarioService.js";

export const usuarioController = {
    getAllUsuarios: async (req, res) => {
        try{
            const usuarios = await usuarioService.getAllUsuarios();
            res.status(200).json(usuarios);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    getUsuarioById: async (req, res) => {
        try{
            const usuario = await usuarioService.getUsuarioById(req.params.id);
            res.status(200).json(usuario);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    getUsuarioByNombre: async (req, res) => {
        try{
            const usuario = await usuarioService.getUsuarioByNombre(req.params.nombre);
            res.status(200).json(usuario);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    createUsuario: async (req, res) => {
        try{
            const body = req.body;
            const nuevoUsuario  = await usuarioService.createUsuario(body);
            res.status(200).json(nuevoUsuario);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    updateUsuario: async (req, res) => {
        try{
            const body = req.body;
            const usuarioActualizado = await usuarioService.updateUsuario(body);
            res.status(200).json(usuarioActualizado);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
    deleteUsuario: async (req, res) => {
        try{
            const usuario = await usuarioService.deleteUsuario(req.params.id);
            res.status(200).json(usuario);
        }catch(error){
            res.status(500).json({ message: error.message });
        }
    },
};