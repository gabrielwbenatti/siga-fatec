import { Request, Response } from "express";
import StatusCode from "../utils/http-status-code";
import classesPlanningService from "../services/classes.planning.service";

class ClassesPlanningController {
  getClassesPlanning = async (req: Request, res: Response) => {
    if (!req.headers["class-id"]) {
      res.status(500).json({ message: "Class not defined" });
      return;
    }

    const classId = req.headers["class-id"];
    const result = await classesPlanningService.getClassesPlanning(+classId!);

    if (result) {
      res.status(200).json(result);
    }
  };

  storeClassPlanning = async (req: Request, res: Response) => {
    const body = req.body;
    const result = await classesPlanningService.storeClassPlanning(body);

    if (result) {
      res.status(201).json(result);
    }
  };

  showClassPlanning = async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await classesPlanningService.showClassPlanning(+id);

    if (result) {
      res.status(200).json(result);
    }
  };

  updateClassPlaning = async (req: Request, res: Response) => {
    const body = req.body;
    const result = await classesPlanningService.updateClassPlaning(body);

    if (result) {
      res.status(200).json(result);
    }
  };
}

export default new ClassesPlanningController();
