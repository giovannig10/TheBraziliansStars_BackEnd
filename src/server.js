import express from "express";
import { config } from "dotenv";
import cors from "cors"; 

import routes from "./routes/index.routes.js";

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 4001; // Define a porta do servidor

const app = express();

app.use(cors())
app.use(express.json());

app.use("/", routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
