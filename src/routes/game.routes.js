import express from "express";
import gameController from "../controllers/gameController.js";

const router = express.Router();

router.get("/", gameController.getAll);
router.post("/", gameController.create);
router.put("/:id", gameController.update);
router.delete("/:id", gameController.delete);

export default router;