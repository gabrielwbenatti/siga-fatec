import { Router } from "express";
import usersRouter from "./users.router";
import teachersRouter from "./teachers.router";
import classesRouter from "./classes.router";
import authRouter from "./auth.router";

const router = Router();

router
  .use("/api/v1/users", usersRouter)
  .use("/api/v1/teachers", teachersRouter)
  .use("/api/v1/auth", authRouter)
  .use("/api/v1/classes", classesRouter);

export default router;
