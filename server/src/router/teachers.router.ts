import { Router } from "express";
import teachersController from "../controllers/teachers.controller";

const teachersRouter = Router();

teachersRouter
  .get("/dashboard/info", teachersController.dashboardInfo)
  .post("/", teachersController.createTeacher)
  .get("/:id", teachersController.showTeacher);

export default teachersRouter;
