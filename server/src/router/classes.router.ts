import { Router } from "express";
import classesMaterialsController from "../controllers/classes.materials.controller";
import classesController from "../controllers/classes.controller";
import classesPlanningController from "../controllers/classes.planning.controller";

const classesRouter = Router();

classesRouter.get("/", classesController.getClasses);

classesRouter
  .get("/planning", classesPlanningController.getClassesPlanning)
  .post("/planning", classesPlanningController.storeClassPlanning)
  .get("/planning/:id", classesPlanningController.showClassPlanning)
  .put("/planning", classesPlanningController.updateClassPlaning);

classesRouter
  .get("/materials", classesMaterialsController.getClassesMaterials)
  .post("/materials", classesMaterialsController.createClassesMaterials);

export default classesRouter;
