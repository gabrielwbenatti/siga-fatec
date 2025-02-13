import { Request, Response } from "express";
import classesPlansService from "../services/classes.planning.service";

class ClassesPlansController {
  getClassesPlans = async (req: Request, res: Response) => {
    if (!req.headers["class-id"]) {
      res.status(500).json({ message: "Class not defined" });
      return;
    }

    const classId = req.headers["class-id"];
    const result = await classesPlansService.getClassesPlans(+classId!);

    if (result) {
      res.status(200).json(result);
    }
  };

  storeClassPlans = async (req: Request, res: Response) => {
    const body = req.body;
    const result = await classesPlansService.storeClassPlans(body);

    if (result) {
      res.status(201).json(result);
    }
  };

  showClassPlans = async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await classesPlansService.showClassPlans(+id);

    if (result) {
      res.status(200).json(result);
    }
  };

  updateClassPlaning = async (req: Request, res: Response) => {
    const body = req.body;
    const result = await classesPlansService.updateClassPlaning(body);

    if (result) {
      res.status(200).json(result);
    }
  };
}

export default new ClassesPlansController();
