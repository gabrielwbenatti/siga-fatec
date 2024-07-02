import { Router } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { usersRouter } from "./users.ts";
import { teachersRouter } from "./teachers.ts";

const router = new Router();
const prefix = "/api/v1";

router.use(`${prefix}/users`, usersRouter.routes());
router.use(`${prefix}/teachers`, teachersRouter.routes());

export { router };
