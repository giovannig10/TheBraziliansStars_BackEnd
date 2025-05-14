import express from "express";
import { config } from "dotenv";
import cors from "cors"; // Importa o middleware CORS
import timeRoutes from "./routes/timeRoutes.js";
import userRoutes from "./routes/userRoutes.js";

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 4001; // Define a porta do servidor
const app = express();
app.use(express.json());
app.use("/times", timeRoutes);
app.use("/users", userRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
