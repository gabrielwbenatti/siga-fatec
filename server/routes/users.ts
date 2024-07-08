import { Router } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { storeUser } from "../controllers/users.ts";

const usersRouter = new Router();

// route: /users
usersRouter.post("/", storeUser);

export { usersRouter };
