import { Router } from "express";
import usersRouter from "./usersRouter";
import teachersRouter from "./teachersRouter";
import classesRouter from "./classesRouter";
import loginRouter from "./loginRouter";

const router = Router();

router
  .use("/api/v1/users", usersRouter)
  .use("/api/v1/teachers", teachersRouter)
  .use("/api/v1/login", loginRouter)
  .use("/api/v1/classes", classesRouter);

export default router;
