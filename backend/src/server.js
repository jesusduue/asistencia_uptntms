import express from "express";
import cors from "cors";
import morgan from "morgan";

//importar rutas
import usuarioRoutes from "./routes/usuarioRoutes.js";
import rolRoutes from "./routes/rolRoutes.js";
import gremioRoutes from "./routes/gremioRoutes.js";
import personalRoutes from "./routes/personalRoutes.js";
import turnoMananaRoutes from "./routes/turnoMananaRoutes.js";
import turnoTardeRoutes from "./routes/turnoTardeRoutes.js";

const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//rutas
app.use("/usuario", usuarioRoutes);
app.use("/rol", rolRoutes);
app.use("/gremio", gremioRoutes);
app.use("/personal", personalRoutes);
app.use("/turno-manana", turnoMananaRoutes);
app.use("/turno-tarde", turnoTardeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto http://localhost:${PORT}`);
});