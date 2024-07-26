import { Router } from "express";
import * as user from "../controllers/userController";

const userRouter = Router();

userRouter.post("/", user.store);

export default userRouter;
