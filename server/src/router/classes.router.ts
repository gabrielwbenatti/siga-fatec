import { Router } from "express";
import classesMaterialsController from "../controllers/classes.materials.controller";
import classesController from "../controllers/classes.controller";
import classesPlansController from "../controllers/classes.plans.controller";
import classesStudentsController from "../controllers/classes.students.controller";

const classesRouter = Router();

classesRouter
  .get("/", classesController.getClasses)
  .post("/", classesController.createClass);

classesRouter
  .get("/planning", classesPlansController.getClassesPlans)
  .post("/planning", classesPlansController.storeClassPlans)
  .get("/planning/:id", classesPlansController.showClassPlans)
  .put("/planning", classesPlansController.updateClassPlaning);

classesRouter
  .get("/materials", classesMaterialsController.getClassesMaterials)
  .post("/materials", classesMaterialsController.createClassesMaterials);

classesRouter.get("/students", classesStudentsController.getClassesStudents);

export default classesRouter;
