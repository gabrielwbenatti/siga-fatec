import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../errors/api-error";
import { classesBibliographyService } from "../services/classes.bibliography.service";
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

      res.status(StatusCode.OK).json(result);
    } catch (error) {
      next?.(error);
    }
  },

  create: async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const classIdHead = req.headers["class-id"] as string;
      if (!classIdHead) {
        throw new BadRequestError("Class Id Undefined");
      }

      const classId = parseInt(classIdHead);
      const result = await classesBibliographyService.create(classId, req.body);

      res.status(StatusCode.CREATED).json(result);
    } catch (error) {
      next?.(error);
    }
  },

  getById: async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const classIdHead = req.headers["class-id"] as string;
      if (!classIdHead) {
        throw new BadRequestError("Class Id Undefined");
      }

      const classId = parseInt(classIdHead);
      const id = parseInt(req.params.id);

      const result = await classesBibliographyService.getById(classId, id);

      res.status(StatusCode.OK).json(result);
    } catch (error) {
      next?.(error);
    }
  },

  update: async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const classIdHead = req.headers["class-id"] as string;
      if (!classIdHead) {
        throw new BadRequestError("Class Id Undefined");
      }

      const classId = parseInt(classIdHead);
      const id = parseInt(req.params.id);

      const result = await classesBibliographyService.update(
        classId,
        id,
        req.body
      );

      res.status(StatusCode.OK).json(result);
    } catch (error) {
      next?.(error);
    }
  },

  delete: async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const classIdHead = req.headers["class-id"] as string;
      if (!classIdHead) {
        throw new BadRequestError("Class Id Undefined");
      }

      const classId = parseInt(classIdHead);
      const id = parseInt(req.params.id);

      await classesBibliographyService.delete(classId, id);

      res.status(StatusCode.NO_CONTENT).send();
    } catch (error) {
      next?.(error);
    }
  },
};
