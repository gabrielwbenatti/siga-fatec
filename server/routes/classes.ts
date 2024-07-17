import { Router } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import {
  indexClasses,
  indexPlanning,
  indexMaterials,
  storeMaterials,
  storePlanning,
  deleteMaterials,
  deletePlanning,
} from "../controllers/classes.ts";

const classesRouter = new Router();

// route: /classes
classesRouter.get("/", indexClasses);

// Rotas de planejamento
classesRouter
  .get("/planning", indexPlanning)
  .post("/planning", storePlanning)
  .delete("/planning/:id", deletePlanning);

// Rotas de materiais
classesRouter
  .get("/materials", indexMaterials)
  .post("/materials", storeMaterials)
  .delete("/materials/:id", deleteMaterials);

export { classesRouter };
