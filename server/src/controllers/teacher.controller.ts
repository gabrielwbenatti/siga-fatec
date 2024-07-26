import { Request, Response } from "express";
import client from "../services/db";
import Teacher from "../models/teacher.model";

const store = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    await client.authenticate();

    try {
      await Teacher.create({
        user_id: body.user_id,
        teach_since: body.teach_since || null,
        document: body.document,
        first_name: body.first_name,
        last_name: body.last_name,
      }).then((teacher) => {
        if (teacher) {
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
