import { Router } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { storeUser } from "../controllers/users.ts";

const userRouter = new Router();

userRouter.post("/", storeUser);

export { userRouter };
