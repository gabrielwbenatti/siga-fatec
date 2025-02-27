import { NextFunction, Request, Response } from "express";
import classesPlansService from "../services/classes.plans.service";

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

  async updateClassPlan(req: Request, res: Response) {
    try {
      const classIdHeader = req.headers["class-id"];
      if (!classIdHeader) {
        return res.status(400).json({ error: "Class not defined" });
      }

      const classId = Number(classIdHeader);
      const body = req.body;

      const result = await classesPlansService.updateClassPlaning(
        classId,
        body
      );

      if (result) {
        res.status(200).json(result);
      }
    } catch (error) {}
  }

  async deleteClassPlan(req: Request, res: Response, next?: NextFunction) {
    try {
      const classIdHeader = req.headers["class-id"];
      if (!classIdHeader) {
        return res.status(400).json({ error: "Class not defined" });
      }

      const id = Number(req.params.id);
      const classId = Number(classIdHeader);

      if (isNaN(id) || isNaN(classId)) {
        return res.status(400).json({ error: "Invalid ID format" });
      }

      const result = await classesPlansService.deleteClassPlan(id, classId);

      if (!result) {
        return res.status(404).json({ error: "Class plan not found" });
      }

      return res.status(200).json(result);
    } catch (error) {
      console.log("Error deleting class plan: ", error);
      res
        .status(500)
        .json({ error: "Failed to delete class plan, try again later" });
      next?.(error);
    }
  }
}

export default new ClassesPlansController();
