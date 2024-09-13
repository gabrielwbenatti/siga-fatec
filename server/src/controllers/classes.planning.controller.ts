import { Request, Response } from "express"; 
import StatusCode from "../utils/http-status-code";
import classesPlanningService from "../services/classes.planning.service";

class ClassesPlanningController {
  getClassesPlanning = async (req: Request, res: Response) => {
    if (!req.headers["class-id"]) { 
      res.status(500).json({ message: "Class not defined" });
    }

    const classId = req.headers["class-id"];
    const result = await classesPlanningService.getClassesPlanning(+classId!)

    if(result) {
      res.status(200).json(result)
    }
  }
} 
 
export default new ClassesPlanningController()
