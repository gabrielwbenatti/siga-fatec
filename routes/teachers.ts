import { Router } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { storeTeacher } from "../controllers/teachers.ts";

const teachersRouter = new Router();

teachersRouter.post("/", storeTeacher);

export { teachersRouter };
