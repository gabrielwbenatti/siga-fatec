import { NextFunction, Request, Response } from "express";
import authService from "../services/auth.service";
import SigaError from "../erros/SigaError";

class AuthController {
  signIn = async (req: Request, res: Response, next?: NextFunction) => {
    try {
      const { body } = req;

      const result = await authService.signIn(body);

      if (result) {
        res.status(200).json(result);
      }
    } catch (error) {
      if (error instanceof SigaError) {
        res.status(error.statusCode).json({ message: error.message });
      }
    }
  };
}

export default new AuthController();
