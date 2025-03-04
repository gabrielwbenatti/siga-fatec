import { NextFunction, Request, Response } from "express";
import authService from "../services/auth.service";

class AuthController {
  signIn = async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const { body } = req;

      const result = await authService.signIn(body);

      if (result) {
        res.status(200).json(result);
      }
    } catch (error) {
      next?.(error);
    }
  };
}

export default new AuthController();
