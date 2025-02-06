import { NextFunction, Request, Response } from "express";
import classesService from "../services/classes.service";

class ClassesController {
  getClasses = async (req: Request, res: Response) => {
    if (!req.headers["teacher-id"]) {
      res.status(500).json({ message: "Techer not defined " });
    }

    const teacherId = req.headers["teacher-id"];
    const result = await classesService.getClasses(+teacherId!);

    if (result) {
      res.status(200).json(result);
    }
  };

  createClass = async (req: Request, res: Response, next?: NextFunction) => {
    const body = req.body;
    const result = await classesService.createClass(body);

    if (result) {
      res.status(201).json(result);
    }
  };
}

export default new ClassesController();
