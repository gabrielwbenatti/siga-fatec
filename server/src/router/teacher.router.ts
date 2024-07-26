import { Router } from "express";
import * as teacher from "../controllers/teacher.controller";

const teacherRouter = Router();

teacherRouter.post("/", teacher.store);

export default teacherRouter;
