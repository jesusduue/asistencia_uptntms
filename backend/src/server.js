import express from "express";
import cors from "cors";
import morgan from "morgan";

//importar rutas
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//rutas
app.use("/usuario", usuarioRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto http://localhost:${PORT}`);
});