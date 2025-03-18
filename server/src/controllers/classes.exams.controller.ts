import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../errors/api-error";
import classesExamsService from "../services/classes.exams.service";
import StatusCode from "../utils/http-status-code";

class ClassesExamsController {
  index = async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const classIdHead = req.headers["class-id"] as string;
      if (!classIdHead) {
        throw new BadRequestError("Class Id undefined");
      }

      const classId = Number(classIdHead);
      const result = await classesExamsService.index(classId);

      return res.status(StatusCode.OK).json(result);
    } catch (error) {
      next?.(error);
    }
  };

  store = async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const classIdHead = req.headers["class-id"] as string;
      if (!classIdHead) {
        throw new BadRequestError("Class Id undefined");
      }

      const classId = Number(classIdHead);
      const { body } = req;
      const result = await classesExamsService.store(body, classId);

      return res.status(StatusCode.CREATED).json(result);
    } catch (error) {
      next?.(error);
    }
  };

  show = async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const classIdHead = req.headers["class-id"] as string;
      const idParam = req.params["id"] as string;

      if (!classIdHead) {
        throw new BadRequestError("Class Id undefined");
      }

      if (!idParam) {
        throw new BadRequestError("Id undefined");
      }

      const classId = Number(classIdHead);
      const id = Number(idParam);
      const result = await classesExamsService.show(id, classId);

      if (!result) {
        return res.status(StatusCode.NOT_FOUNT).json({ message: "Not found" });
      }

      return res.status(StatusCode.OK).json(result);
    } catch (error) {
      next?.(error);
    }
  };

  update = async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const classIdHead = req.headers["class-id"] as string;
      if (!classIdHead) {
        throw new BadRequestError("Class Id undefined");
      }

      const classId = Number(classIdHead);
      const { body } = req;
      const result = await classesExamsService.update(body, classId);

      return res.status(StatusCode.OK).json(result);
    } catch (error) {
      next?.(error);
    }
  };
}

export default new ClassesExamsController();
