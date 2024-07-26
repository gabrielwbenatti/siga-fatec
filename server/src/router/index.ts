import { Router } from "express";
import userRouter from "./users.router";

const router = Router();

router.use("/api/v1", userRouter);

export default router;
