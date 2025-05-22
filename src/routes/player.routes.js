import express from "express";
import playerController from "../controllers/playerController.js";
import teamController from "../controllers/teamController.js";

const router = express.Router();

router.get("/", teamController.getAll);

export default router;