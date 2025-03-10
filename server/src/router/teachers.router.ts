import { Router } from "express";
import teachersController from "../controllers/teachers.controller";

const teachersRouter = Router();

teachersRouter
  .post("/", teachersController.createTeacher)
  .get("/:id", teachersController.showTeacher);

export default teachersRouter;
