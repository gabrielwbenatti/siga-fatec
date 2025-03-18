import { NextFunction, Request, Response } from "express";
import classesStudentsService from "../services/classes.students.service";
import { BadRequestError } from "../errors/api-error";
import StatusCode from "../utils/http-status-code";

class ClassesStudentsController {
  getClassesStudents = async (
    req: Request,
    res: Response,
    next?: NextFunction
  ) => {
    try {
      const classIdParams = req.headers["class-id"];
      if (!classIdParams) {
        throw new BadRequestError("Class not defined");
      }

      const classId = Number(classIdParams);
      const result = await classesStudentsService.getClassesStudents(classId);

      return res.status(StatusCode.OK).json(result);
    } catch (error) {
      next?.(error);
    }
  };
}

export default new ClassesStudentsController();
