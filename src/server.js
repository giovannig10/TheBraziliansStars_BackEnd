import express from "express";
import timeRoutes from "./routes/timeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/times", timeRoutes);
app.use("/users", userRoutes);
app.use("/matchs", matchRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
