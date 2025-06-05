import express from "express";

import playerRouter from "./player.routes.js";
import teamRouter from "./team.routes.js";
import userRouter from "./user.routes.js"

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.use("/players", playerRouter);
router.use("/teams", teamRouter);
router.use("/users", userRouter);

router.use(authMiddleware);

export default router;