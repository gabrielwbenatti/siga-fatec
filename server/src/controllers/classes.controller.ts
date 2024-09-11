import { Request, Response } from "express";
import classesService from "../services/classes.service";

class ClassesController {
  getClasses = async (req: Request, res: Response) => {
    if (!req.headers["teacher-id"]) {
      res.status(500).json({ message: "Techer not defined " });
    }

    const teacherId = req.headers["teacher-id"];
    const result = await classesService.getClasses(+teacherId!);

    if (result) {
      res.status(200).json(result);
    }
  };
}

export default new ClassesController();
