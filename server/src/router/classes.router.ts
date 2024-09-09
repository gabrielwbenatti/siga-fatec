import { Router } from "express";
import * as planning from "../controllers/classesPlanningController";
import classesMaterialsController from "../controllers/classes.materials.controller";

const classesRouter = Router();

classesRouter.get("/classes");

// classesRouter
//   .get("/planning", planning.index)
//   .post("/planning", (_, res) => res.send({ route: "POST PLANNING" }))
//   .delete("/planning/:id", (_, res) => res.send({ route: "DELETE PLANNING" }));

classesRouter
  .get("/materials", classesMaterialsController.getClassesMaterials)
  .post("/materials", classesMaterialsController.createClassesMaterials)
  .delete("/materials/:id", (_, res) =>
    res.send({ route: "DELETE MATERIALS" })
  );

export default classesRouter;
