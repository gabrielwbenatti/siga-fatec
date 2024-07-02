import { Router } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { usersRouter } from "./users.ts";
import { teachersRouter } from "./teachers.ts";
import { loginRoute } from "./login.ts";
import { classesRouter } from "./classes.ts";

const router = new Router();
const prefix = "/api/v1";

router
  .use(`${prefix}/login`, loginRoute.routes())
  .use(`${prefix}/users`, usersRouter.routes())
  .use(`${prefix}/teachers`, teachersRouter.routes())
  .get(`${prefix}/classes`, classesRouter.routes());

export { router };
