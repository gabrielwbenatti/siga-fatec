import { Request, Response } from "express";
import loginService from "../services/login.service";

class LoginController {
  login = async (req: Request, res: Response) => {
    const body = req.body;
    const result = await loginService.login(body);

    if (result) {
      res.status(200).json(result);
    }
  };
}

export default new LoginController();
