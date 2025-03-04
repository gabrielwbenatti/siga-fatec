import { NextFunction, Request, Response } from "express";
import classesAttendancesService from "../services/classes.attendances.service";
import StatusCode from "../utils/http-status-code";

class ClassesAttendanceController {
  getPlansAttendances = async (req: Request, res: Response) => {
    const classIdHeader = req.headers["class-id"];
    const planIdParam = req.params.id;

    if (!classIdHeader) {
      return res
        .status(StatusCode.BAD_REQUEST)
        .json({ message: "Class not defined" });
    }

    if (!planIdParam) {
      return res
        .status(StatusCode.BAD_REQUEST)
        .json({ message: "Plan not defined" });
    }

    const classId = Number(classIdHeader);
    const planId = Number(planIdParam);

    const result = await classesAttendancesService.getPlansAttendances(
      classId,
      planId
    );

    if (!result) {
      return res.status(StatusCode.NOT_FOUNT).json(result);
    }

    return res.status(StatusCode.OK).json(result);
  };

  async storePlanAttendances(req: Request, res: Response, next?: NextFunction) {
    try {
      const planIdParam = req.params.id;
      const classIdHeader = req.headers["class-id"];

      if (!classIdHeader) {
        return res
          .status(StatusCode.BAD_REQUEST)
          .json({ message: "Class not defined" });
      }

      if (!planIdParam) {
        return res
          .status(StatusCode.BAD_REQUEST)
          .json({ message: "Plan not defined" });
      }

      const { body } = req;
      const classId = Number(classIdHeader);
      const planId = Number(planIdParam);

      const result = await classesAttendancesService.storePlanAttendances(
        classId,
        planId,
        body
      );

      if (!result) {
      }

      return res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(StatusCode.INTERNAL_ERROR).json({
        error: "Não foi possível gravar os dados, tente novamente mais tarde",
      });
      next?.();
    }
  }

  async updatePlanAttendances(
    req: Request,
    res: Response,
    next?: NextFunction
  ) {
    try {
      const planIdParam = req.params.id;
      const classIdHeader = req.headers["class-id"];

      if (!classIdHeader) {
        return res
          .status(StatusCode.BAD_REQUEST)
          .json({ message: "Class not defined" });
      }

      if (!planIdParam) {
        return res
          .status(StatusCode.BAD_REQUEST)
          .json({ message: "Plan not defined" });
      }

      const { body } = req;
      const classId = Number(classIdHeader);
      const planId = Number(planIdParam);

      const result = await classesAttendancesService.updatePlanAttendances(
        classId,
        planId,
        body
      );

      if (!result) {
      }

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(StatusCode.INTERNAL_ERROR).json({
        error: "Não foi possível gravar os dados, tente novamente mais tarde",
      });
      next?.();
    }
  }
}

export default new ClassesAttendanceController();
