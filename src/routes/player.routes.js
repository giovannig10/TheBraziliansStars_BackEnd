import express from "express";
import playerController from "../controllers/playerController.js";

const router = express.Router();

router.get("/", playerController.getAll);
router.post("/", playerController.create);
router.put("/:id", playerController.update);
router.delete("/:id", playerController.delete);

export default router;