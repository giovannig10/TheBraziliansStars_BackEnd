import express from "express";
import timeController from "../controllers/timeController.js";
const router = express.Router();
router.get("/", timeController.getAll);
router.post("/", timeController.create);
router.put("/:id", timeController.update);
router.delete("/:id", timeController.delete);
export default router;
//edede