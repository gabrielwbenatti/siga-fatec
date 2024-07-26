import { Request, Response } from "express";
import client from "../services/db";
import User from "../models/user.model";
import * as bcrypt from "bcrypt";
import {
  handleException,
  InvalidCredentialsException,
  UserNotFoundException,
} from "../utils/exceptions";

const login = async (req: Request, res: Response) => {
  const body = req.body;

  await client
    .authenticate()
    .then(async () => {
      const user = await User.findOne({ where: { username: body.username } });

      if (!user) {
        throw new UserNotFoundException();
      }

      const isMatch = await bcrypt.compare(body.password, user.password);

      if (!isMatch) {
        throw new InvalidCredentialsException();
      }

      const payload = { id: user.id };
      res.send({ data: payload });
    })
    .catch((error) => {
      handleException(res, error);
    })
    .finally(() => {
      client.close();
      res.end();
    });
};

export { login };
