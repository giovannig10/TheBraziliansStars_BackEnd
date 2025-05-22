import express from "express";

import playerRouter from "./player.routes.js";
import teamRouter from "./team.routes.js";

const router = express.Router();

router.use("/players", playerRouter);
router.use("/teams", teamRouter);

export default router;