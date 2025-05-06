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
      return next?.(error);
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
      return next?.(error);
    }
  };

  show = async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const classIdHead = req.headers["class-id"] as string;
      const examIdParam = req.params["examId"] as string;

      if (!classIdHead) {
        throw new BadRequestError("Class Id undefined");
      }

      if (!examIdParam) {
        throw new BadRequestError("Id undefined");
      }

      const classId = Number(classIdHead);
      const examId = Number(examIdParam);
      const result = await classesExamsService.show(examId, classId);

      if (!result) {
        return res.status(StatusCode.NOT_FOUNT).json({ message: "Not found" });
      }

      return res.status(StatusCode.OK).json(result);
    } catch (error) {
      return next?.(error);
    }
  };

  update = async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const classIdHead = req.headers["class-id"] as string;
      const examIdParam = req.params["examId"] as string;

      if (!classIdHead) {
        throw new BadRequestError("Class Id undefined");
      }

      if (!examIdParam) {
        throw new BadRequestError("Id undefined");
      }

      const classId = Number(classIdHead);
      const examId = Number(examIdParam);
      const { body } = req;
      const result = await classesExamsService.update(body, examId, classId);

      return res.status(StatusCode.OK).json(result);
    } catch (error) {
      return next?.(error);
    }
  };

  indexSubmissions = async (
    req: Request,
    res: Response,
    next?: NextFunction
  ) => {
    try {
      const classIdHead = req.headers["class-id"] as string;
      if (!classIdHead) {
        throw new BadRequestError("Class Id undefined");
      }

      const classId = Number(classIdHead);
      const result = await classesExamsService.indexSubmissions(classId);

      return res.status(StatusCode.OK).json(result);
    } catch (error) {
      return next?.(error);
    }
  };

  postSubmissions = async (
    req: Request,
    res: Response,
    next?: NextFunction
  ) => {
    try {
      const classIdHead = req.headers["class-id"] as string;
      if (!classIdHead) {
        throw new BadRequestError("Class Id undefined");
      }

      const classId = Number(classIdHead);
      const { body } = req;
      const result = await classesExamsService.postSubmissions(body, classId);

      return res.status(StatusCode.CREATED).json(result);
    } catch (error) {
      return next?.(error);
    }
  };
}

export default new ClassesExamsController();
