import { NextFunction, Request, Response } from "express";
import classesService from "../services/classes.service";

class ClassesController {
  getClasses = async (req: Request, res: Response) => {
    const teacherIdParam = req.headers["teacher-id"] as string;
    if (!teacherIdParam) {
      res.status(500).json({ message: "Techer not defined " });
      return;
    }

    const teacherId = Number(teacherIdParam);
    const result = await classesService.getClasses(teacherId);

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

  getClassById = async (req: Request, res: Response) => {
    const classIdParam = req.params.id;
    if (!classIdParam) {
      res.status(400).json({ message: "Class ID not provided" });
      return;
    }

    const classIdHeader = req.headers["class-id"] as string;
    if (!classIdHeader) {
      res.status(500).json({ message: "Class ID not defined" });
      return;
    }

    const classId = parseInt(classIdParam);
    const result = await classesService.getClassById(classId);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Class not found" });
    }
  };

  setFormula = async (req: Request, res: Response) => {
    const classIdParam = req.params.id;
    if (!classIdParam) {
      res.status(400).json({ message: "Class ID not provided" });
      return;
    }

    const classIdHeader = req.headers["class-id"] as string;
    if (!classIdHeader) {
      res.status(500).json({ message: "Class ID not defined" });
      return;
    }

    const classId = parseInt(classIdParam);
    const result = await classesService.setFormula(req.body, classId);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Class not found" });
    }
  };

  getFinishedClasses = async (req: Request, res: Response) => {
    const teacherIdParam = req.headers["teacher-id"] as string;
    if (!teacherIdParam) {
      res.status(500).json({ message: "Techer not defined " });
      return;
    }

    const teacherId = Number(teacherIdParam);
    const result = await classesService.getFinishedClasses(teacherId);

    if (result) {
      res.status(200).json(result);
    }
  };
}

export default new ClassesController();
