import { Router } from "express";
import teachersController from "../controllers/teachers.controller";

const teachersRouter = Router();

teachersRouter.post("/", teachersController.createTeacher);

export default teachersRouter;
