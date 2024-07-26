import { Router } from "express";
import userRouter from "./users.router";
import teacherRouter from "./teacher.router";

const router = Router();

router.use("/api/v1", userRouter).use("/api/v1", teacherRouter);

export default router;
