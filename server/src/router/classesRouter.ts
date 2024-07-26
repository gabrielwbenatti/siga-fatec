import { Router } from "express";
import * as planning from "../controllers/classesPlanningController";
import * as material from "../controllers/classesMaterialsController";

const classesRouter = Router();

classesRouter
  .get("/planning", planning.index)
  .post("/planning", (_, res) => res.send({ route: "POST PLANNING" }))
  .delete("/planning/:id", (_, res) => res.send({ route: "DELETE PLANNING" }));

classesRouter
  .get("/materials", material.index)
  .post("/materials", material.store)
  .delete("/materials/:id", (_, res) =>
    res.send({ route: "DELETE MATERIALS" })
  );

export default classesRouter;
