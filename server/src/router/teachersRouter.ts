import { Router } from "express";
import * as teacher from "../controllers/teacherController";

const teachersRouter = Router();

teachersRouter.post("/", teacher.store);

export default teachersRouter;
