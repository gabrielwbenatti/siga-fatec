import { Request, Response } from "express";
import classesMaterialsService from "../services/classes.materials.service";

class ClassesMaterialsController {
  getClassesMaterials = async (req: Request, res: Response) => {
    if (!req.headers["class-id"]) {
      res.status(500).json({ message: "Class not defined " });
    }

    const classId = +req.headers["class-id"]!;
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

  showClassMaterial = async (req: Request, res: Response) => {
    if (!req.headers["class-id"]) {
      res.status(500).json({ message: "Class not defined " });
    }

    const classId = +req.headers["class-id"]!;
    const id = +req.params.id;

    const result = await classesMaterialsService.showClassMaterial(id, classId);

    if (result) {
      res.status(200).json(result);
    }
  };
}

export default new ClassesMaterialsController();
