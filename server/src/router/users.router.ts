import { Router } from "express";
import { store } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/users", store);

export default userRouter;
