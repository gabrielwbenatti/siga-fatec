import { Router } from "express";
import * as user from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/", user.store);

export default userRouter;
