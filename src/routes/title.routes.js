import express from "express";
import TitleController from "../controllers/titleController.js";

const titleRouter = express.Router();

titleRouter.get("/", TitleController.getAll);
titleRouter.post("/", TitleController.create);
titleRouter.put("/:id", TitleController.update);
titleRouter.delete("/:id", TitleController.delete);

export default titleRouter;