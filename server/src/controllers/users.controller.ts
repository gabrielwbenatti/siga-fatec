import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import StatusCode from "../utils/http-status-code";
import usersService from "../services/users.service";

class UsersController {
  createUser = async (req: Request, res: Response) => {
    const body = req.body;
    const result = await usersService.createUser(body);

    if (result) {
      res.status(201).json(result);
    }
  };
}

export default new UsersController();
