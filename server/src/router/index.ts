import { Router } from "express";
import usersRouter from "./users.router";
import teachersRouter from "./teachers.router";
import classesRouter from "./classes.router";
import loginRouter from "./login.router";

const router = Router();

router
  .use("/api/v1/users", usersRouter)
  .use("/api/v1/teachers", teachersRouter)
  .use("/api/v1/login", loginRouter)
  .use("/api/v1/classes", classesRouter);

export default router;
