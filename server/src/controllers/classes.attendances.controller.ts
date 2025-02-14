import { Request, Response } from "express";
import classesAttendancesService from "../services/classes.attendances.service";

class ClassesAttendanceController {
  getPlansAttendances = async (req: Request, res: Response) => {
    if (!req.headers["class-id"]) {
      res.status(500).json({ message: "Class not defined" });
      return;
    }

    const classId = req.headers["class-id"];
    const result = await classesAttendancesService.getPlansAttendances(
      +classId!
    );

    if (result) {
      res.status(200).json(result);
    }
  };
}

export default new ClassesAttendanceController();
