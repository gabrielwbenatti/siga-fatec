import { Router } from "express";
import classesMaterialsController from "../controllers/classes.materials.controller";
import classesController from "../controllers/classes.controller";
import classesPlansController from "../controllers/classes.plans.controller";
import classesStudentsController from "../controllers/classes.students.controller";
import classesAttendancesController from "../controllers/classes.attendances.controller";
import classesExamsController from "../controllers/classes.exams.controller";
import { classesBibliographyController } from "../controllers/classesBibliographyController";

const classesRouter = Router();

classesRouter
  .get("/", classesController.getClasses)
  .post("/", classesController.createClass)
  .get("/finished", classesController.getFinishedClasses)
  .post("/duplicate-plans", classesPlansController.duplicateClassPlan);

classesRouter
  .get("/class/:id", classesController.getClassById)
  .patch("/class/:id/set-formula", classesController.setFormula);

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
  .get("/exams/:examId", classesExamsController.show)
  .put("/exams/:examId", classesExamsController.update)
  .get("/exams/get/submissions", classesExamsController.indexSubmissions)
  .post("/exams/post/submissions", classesExamsController.postSubmissions);

classesRouter
  .get("/bibliography", classesBibliographyController.getAll)
  .post("/bibliography", classesBibliographyController.create)
  .get("/bibliography/:id", classesBibliographyController.getById)
  .put("/bibliography/:id", classesBibliographyController.update)
  .delete("/bibliography/:id", classesBibliographyController.delete);

export default classesRouter;
