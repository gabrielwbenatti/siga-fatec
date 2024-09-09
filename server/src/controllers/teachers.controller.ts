import { Request, Response } from "express";
import teacherService from "../services/teacher.service";
class TeachersController {
  createTeacher = async (req: Request, res: Response) => {
    const body = req.body;
    const result = await teacherService.createTeacher(body);

    if (result) {
      res.status(201).json(result);
    }
  };
}

export default new TeachersController();
