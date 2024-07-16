import { Router } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { usersRouter } from "./users.ts";
import { teachersRouter } from "./teachers.ts";
import { loginRoute } from "./login.ts";
import { classesRouter } from "./classes.ts";

const router = new Router({ prefix: "/api/v1" });

router
  .use("/login", loginRoute.routes())
  .use("/users", usersRouter.routes())
  .use("/teachers", teachersRouter.routes())
  .get("/classes", classesRouter.routes());

export { router };
