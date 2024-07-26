import { genSalt, hash } from "bcrypt";
import { Request, Response } from "express";
import client from "../services/db";
import User from "../models/user.model";

const store = async (req: Request, res: Response) => {
  const body = req.body;
  const salt = await genSalt(8);
  const nPassword = await hash(body.password, salt);

  try {
    await client.authenticate();

    try {
      await User.create({
        username: body.username,
        password: nPassword,
      }).then((user) => {
        if (user) {
          res.statusCode = 201;
        }
      });
    } catch (error) {
      res.statusCode = 500;
      res.send(error);
    }
  } finally {
    client.close();
    res.end();
  }
};

export { store };
