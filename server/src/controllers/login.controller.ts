import { NextFunction, Request, Response } from "express";
import loginService from "../services/login.service";

class LoginController {
  login = async (req: Request, res: Response, next?: NextFunction) => {
    const body = req.body;
    try {
      const result = await loginService.login(body);

      if (result) {
        res.status(200).json(result);
      }
    } catch (error) {
      next?.(error);
    }
  };
}

export default new LoginController();
