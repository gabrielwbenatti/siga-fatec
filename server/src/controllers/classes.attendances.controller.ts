import { Request, Response } from "express";
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
}

export default new ClassesAttendanceController();
