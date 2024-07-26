import { Router } from "express";
import * as planning from "../controllers/class.planning.controller";
import * as material from "../controllers/class.material.controller";

const classRouter = Router();

classRouter
  .get("/planning", planning.index)
  .post("/planning", (_, res) => res.send({ route: "POST PLANNING" }))
  .delete("/planning/:id", (_, res) => res.send({ route: "DELETE PLANNING" }));

classRouter
  .get("/materials", material.index)
  .post("/materials", (_, res) => res.send({ route: "POST MATERIALS" }))
  .delete("/materials/:id", (_, res) =>
    res.send({ route: "DELETE MATERIALS" })
  );

export default classRouter;
