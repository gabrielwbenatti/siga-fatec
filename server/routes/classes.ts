import { Router } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { indexClasses } from "../controllers/classes.ts";
import { authMiddleware } from "../middlewares/authMiddleware.ts";

const classesRouter = new Router();

classesRouter.get("/", authMiddleware, indexClasses);

export { classesRouter };
