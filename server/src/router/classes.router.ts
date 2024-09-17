import { Router } from "express";
import classesMaterialsController from "../controllers/classes.materials.controller";
import classesController from "../controllers/classes.controller";
import classesPlanningController from "../controllers/classes.planning.controller";

const classesRouter = Router();

classesRouter.get("/", classesController.getClasses);

classesRouter
  .get("/planning", classesPlanningController.getClassesPlanning)
  .post("/planning", classesPlanningController.storeClassPlanning);
//   .delete("/planning/:id", (_, res) => res.send({ route: "DELETE PLANNING" }));

classesRouter
  .get("/materials", classesMaterialsController.getClassesMaterials)
  .post("/materials", classesMaterialsController.createClassesMaterials)
  .delete("/materials/:id", (_, res) =>
    res.send({ route: "DELETE MATERIALS" })
  );

export default classesRouter;
