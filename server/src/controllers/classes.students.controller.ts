import { NextFunction, Request, Response } from "express";
import classesStudentsService from "../services/classes.students.service";

class ClassesStudentsController {
  getClassesStudents = async (
    req: Request,
    res: Response,
    next?: NextFunction
  ) => {
    if (!req.headers["class-id"]) {
      res.status(500).json({ message: "Class not defined" });
      return;
    }

    const classId = req.headers["class-id"];
    const result = await classesStudentsService.getClassesStudents(+classId);

    if (result) {
      res.status(200).json(result);
    }
  };
}

export default new ClassesStudentsController();
