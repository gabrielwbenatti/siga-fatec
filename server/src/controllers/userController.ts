import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import client from "../services/db";
import User from "../models/User";
import StatusCode from "../utils/http-status-code";

const store = async (req: Request, res: Response) => {
  const body = req.body;
  const salt = await bcrypt.genSalt(8);
  const nPassword = await bcrypt.hash(body.password, salt);

  try {
    await client.authenticate();

    try {
      await User.create({
        username: body.username,
        email: body.email,
        password: nPassword,
      }).then((user) => {
        if (user) {
          res.statusCode = StatusCode.Created;
        }
      });
    } catch (error) {
      res.statusCode = StatusCode.InternalError;
      res.send(error);
    }
  } finally {
    res.end();
  }
};

export { store };
