import express from "express";
import timeRoutes from "./routes/timeRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/times", timeRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
