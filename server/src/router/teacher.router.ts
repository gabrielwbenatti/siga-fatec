import { Router } from "express";
import { store } from "../controllers/teacher.controller";

const teacherRouter = Router();

teacherRouter.post("/teachers", store);

export default teacherRouter;
