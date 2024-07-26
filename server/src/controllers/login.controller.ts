import { Request, Response } from "express";
import client from "../services/db";
import User from "../models/user.model";
import * as bcrypt from "bcrypt";
import { StatusCode } from "../utils/http.status.code";

const login = async (req: Request, res: Response) => {
  const body = req.body;

  await client
    .authenticate()
    .then(async () => {
      const user = await User.findOne({ where: { username: body.username } });

      if (!user) throw new Error("User not found");

      const isMatch = await bcrypt.compare(body.password, user.password);

      if (!isMatch) throw new Error("Invalid Credentials");

      const payload = { id: user.id };
      res.send({ data: payload });
    })
    .catch((error) => {
      res.statusCode = StatusCode.Unauthorized;
      res.send({ message: error.message });
    })
    .finally(() => {
      client.close();
      res.end();
    });
};

export { login };
