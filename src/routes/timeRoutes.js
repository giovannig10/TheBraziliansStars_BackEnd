import express from "express";
import matchController from "../controllers/matchController.js";
const router = express.Router();
router.get("/", matchController.getAll);
router.post("/", matchController.create);
router.put("/:id", matchController.update);
router.delete("/:id", matchController.delete);
export default router;
//edede