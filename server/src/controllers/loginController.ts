import { Request, Response } from "express";
import client from "../services/db";
import User from "../models/User";
import * as bcrypt from "bcrypt";
import StatusCode from "../utils/http-status-code";

const login = async (req: Request, res: Response) => {
  const body = req.body;

  await client
    .authenticate()
    .then(async () => {
      const user = await User.findOne({ where: { email: body.email } });

      if (!user) {
        res.statusCode = StatusCode.Unauthorized;
        throw new Error("User not found");
      }

      const isMatch = await bcrypt.compare(body.password, user.password);

      if (!isMatch) {
        res.statusCode = StatusCode.Unauthorized;
        throw new Error("Invalid Credentials");
      }

      const payload = { id: user.id };
      res.send({ data: payload });
    })
    .catch((error) => {
      res.send({ message: error.message });
      res.end();
    })
    .finally(() => {
      res.end();
    });
};

export { login };
