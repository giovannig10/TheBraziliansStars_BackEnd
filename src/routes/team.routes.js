import express from "express";
import teamController from "../controllers/teamController.js";

const router = express.Router();

router.get("/", teamController.getAll);
router.post("/", teamController.create);
router.put("/:id", teamController.update);
router.delete("/:id", teamController.delete);

export default router;
