import { Router } from "express";
import * as user from "../controllers/userController";

const usersRouter = Router();

usersRouter.post("/", user.store);

export default usersRouter;
