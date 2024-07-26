import { Router } from "express";
import { login } from "../controllers/loginController";

const loginRouter = Router();

loginRouter.post("/", login);

export default loginRouter;
