import { Router } from "express";
import userRouter from "./usersRouter";
import teacherRouter from "./teachersRouter";
import classRouter from "./classesRouter";
import loginRouter from "./loginRouter";

const router = Router();

router
  .use("/api/v1/users", userRouter)
  .use("/api/v1/teachers", teacherRouter)
  .use("/api/v1/login", loginRouter)
  .use("/api/v1/classes", classRouter);

export default router;
