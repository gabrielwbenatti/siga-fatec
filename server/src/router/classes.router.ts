import { Router } from "express";
import classesMaterialsController from "../controllers/classes.materials.controller";
import classesController from "../controllers/classes.controller";
import classesPlansController from "../controllers/classes.plans.controller";
import classesStudentsController from "../controllers/classes.students.controller";
import classesAttendancesController from "../controllers/classes.attendances.controller";
import classesExamsController from "../controllers/classes.exams.controller";

const classesRouter = Router();

classesRouter
  .get("/", classesController.getClasses)
  .post("/", classesController.createClass);

classesRouter
  .get("/plans", classesPlansController.getClassesPlans)
  .post("/plans", classesPlansController.storeClassPlans)
  .get("/plans/:id", classesPlansController.showClassPlans)
  .put("/plans/:id", classesPlansController.updateClassPlan)
  .delete("/plans/:id", classesPlansController.deleteClassPlan)
  .get(
    "/plans/:id/attendances",
    classesAttendancesController.getPlansAttendances
  )
  .post(
    "/plans/:id/attendances",
    classesAttendancesController.storePlanAttendances
  )
  .put(
    "/plans/:id/attendances",
    classesAttendancesController.updatePlanAttendances
  );

classesRouter
  .get("/materials", classesMaterialsController.getClassesMaterials)
  .post("/materials", classesMaterialsController.createClassesMaterials)
  .patch("/materials", classesMaterialsController.reorderClassMaterials)
  .get("/materials/:id", classesMaterialsController.showClassMaterial)
  .delete("/materials/:id", classesMaterialsController.deleteClassMaterial)
  .put("/materials/:id", classesMaterialsController.updateClassMaterial);

classesRouter.get("/students", classesStudentsController.getClassesStudents);

classesRouter
  .get("/exams", classesExamsController.index)
  .post("/exams", classesExamsController.store)
  .get("/exams/:id", classesExamsController.show)
  .put("/exams/:id", classesExamsController.update);

export default classesRouter;
