import { Router } from "express";
import userRouter from "./users.router";
import teacherRouter from "./teacher.router";
import classRouter from "./classes.router";
import loginRouter from "./login.router";

const router = Router();

router
  .use("/api/v1/users", userRouter)
  .use("/api/v1/teachers", teacherRouter)
  .use("/api/v1/login", loginRouter)
  .use("/api/v1/classes", classRouter);

export default router;
