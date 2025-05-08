import { Request, Response } from "express";
import teacherService from "../services/teacher.service";
import StatusCode from "../utils/http-status-code";

class TeachersController {
  dashboardInfo = async (req: Request, res: Response) => {
    const teacherParam = req.headers["teacher-id"];
    if (!teacherParam) {
      return res
        .status(StatusCode.BAD_REQUEST)
        .json({ message: "Teacher not defined " });
    }

    const teacherId = Number(teacherParam);
    const result = await teacherService.dashboardInfo(teacherId);

    res.status(200).json(result);
  };

  createTeacher = async (req: Request, res: Response) => {
    const body = req.body;
    const result = await teacherService.createTeacher(body);

    if (result) {
      res.status(201).json(result);
    }
  };

  async showTeacher(req: Request, res: Response) {
    const teacherParam = req.params.id;
    if (!teacherParam) {
      return res
        .status(StatusCode.BAD_REQUEST)
        .json({ message: "Teacher not defined " });
    }

    const teacherId = Number(teacherParam);
    const result = await teacherService.showTeacher(teacherId);

    if (!result) {
      return res.status(StatusCode.NOT_FOUNT).json({ message: "Not found" });
    }

    return res.status(StatusCode.OK).json(result);
  }
}

export default new TeachersController();
