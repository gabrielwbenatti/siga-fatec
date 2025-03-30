import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../errors/api-error";
import { classesBibliographyService } from "../services/classesBibliographyService";
import StatusCode from "../utils/http-status-code";

export const classesBibliographyController = {
  getAll: async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const classIdHead = req.headers["class-id"] as string;
      if (!classIdHead) {
        throw new BadRequestError("Class Id Undefined");
      }

      const classId = parseInt(classIdHead);
      const result = await classesBibliographyService.getAll(classId);

      return res.status(StatusCode.OK).json(result);
    } catch (error) {
      return next?.(error);
    }
  },
};
