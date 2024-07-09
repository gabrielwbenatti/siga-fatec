import { Router } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import {
  indexClasses,
  indexPlanning,
  indexMaterials,
  storeMaterials,
} from "../controllers/classes.ts";

const classesRouter = new Router();

// route: /classes
classesRouter
  .get("/", indexClasses)
  .get("/planning", indexPlanning)
  .get("/materials", indexMaterials)
  .post("/materials", storeMaterials);

export { classesRouter };
