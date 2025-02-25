import { Router } from "express";
import classesMaterialsController from "../controllers/classes.materials.controller";
import classesController from "../controllers/classes.controller";
import classesPlansController from "../controllers/classes.plans.controller";
import classesStudentsController from "../controllers/classes.students.controller";
import classesAttendancesController from "../controllers/classes.attendances.controller";

const classesRouter = Router();

classesRouter
  .get("/", classesController.getClasses)
  .post("/", classesController.createClass);

classesRouter
  .get("/plans", classesPlansController.getClassesPlans)
  .post("/plans", classesPlansController.storeClassPlans)
  .get("/plans/:id", classesPlansController.showClassPlans)
  .put("/plans", classesPlansController.updateClassPlaning);

classesRouter
  .get("/materials", classesMaterialsController.getClassesMaterials)
  .post("/materials", classesMaterialsController.createClassesMaterials)
  .get("/materials/:id", classesMaterialsController.showClassMaterial)
  .delete("/materials/:id", classesMaterialsController.deleteClassMaterial)
  .put("/materials/:id", classesMaterialsController.updateClassMaterial);

classesRouter.get("/students", classesStudentsController.getClassesStudents);

classesRouter.get(
  "/attendances",
  classesAttendancesController.getPlansAttendances
);

export default classesRouter;
