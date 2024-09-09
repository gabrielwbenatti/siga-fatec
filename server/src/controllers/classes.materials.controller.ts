import { Request, Response } from "express";
import db from "../config/database";
import classesMaterialsService from "../services/classes.materials.service";

class ClassesMaterialsController {
  getClassesMaterials = async (_: Request, res: Response) => {
    const classId = 1;

    const result = await classesMaterialsService.getClassesMaterials(classId);

    if (result) {
      res.status(200).json(result);
    }
  };

  createClassesMaterials = async (req: Request, res: Response) => {
    const body = req.body;
    const result = await classesMaterialsService.createClassesMaterials(body);

    if (result) {
      res.status(201).json(result);
    }
  };
}

export default new ClassesMaterialsController();
