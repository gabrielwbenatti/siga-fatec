import { Request, Response } from "express";
import classesMaterialsService from "../services/classes.materials.service";

class ClassesMaterialsController {
  getClassesMaterials = async (req: Request, res: Response) => {
    try {
      if (!req.headers["class-id"]) {
        res.status(500).json({ message: "Class not defined " });
        return;
      }

      const classId = +req.headers["class-id"]!;
      const result = await classesMaterialsService.getClassesMaterials(classId);

      if (result) {
        res.status(200).json(result);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

  createClassesMaterials = async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const result = await classesMaterialsService.createClassesMaterials(body);

      if (result) {
        res.status(201).json(result);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

  showClassMaterial = async (req: Request, res: Response) => {
    try {
      if (!req.headers["class-id"]) {
        res.status(500).json({ message: "Class not defined " });
        return;
      }

      const classId = +req.headers["class-id"]!;
      const id = +req.params.id;

      const result = await classesMaterialsService.showClassMaterial(
        id,
        classId
      );

      if (result) {
        res.status(200).json(result);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

  deleteClassMaterial = async (req: Request, res: Response) => {
    try {
      if (!req.headers["class-id"]) {
        res.status(500).json({ message: "Class not defined " });
        return;
      }

      const classId = +req.headers["class-id"]!;
      const id = +req.params.id;

      const result = await classesMaterialsService.deleteClassMaterial(
        id,
        classId
      );

      if (result) {
        res.status(200).json(result);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

  updateClassMaterial = async (req: Request, res: Response) => {
    try {
      if (!req.headers["class-id"]) {
        res.status(500).json({ message: "Class not defined " });
        return;
      }

      const id = +req.params.id,
        classId = +req.headers["class-id"]!,
        body = req.body;

      const result = await classesMaterialsService.updateClassMaterial(
        id,
        classId,
        body
      );

      if (result) {
        res.status(200).json(result);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };
}

export default new ClassesMaterialsController();
