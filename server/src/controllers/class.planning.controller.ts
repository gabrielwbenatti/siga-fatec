import { Request, Response } from "express";
import client from "../services/db";
import ClassPlanning from "../models/class.planning.model";

const index = async (_: Request, res: Response) => {
  try {
    await client.authenticate();

    try {
      const result = await ClassPlanning.findAll({
        where: { class_id: 2 },
      });

      if (result) {
        res.send(result);
        res.statusCode = 200;
      } else {
        res.statusCode = 204;
      }
    } catch (error) {
      res.statusCode = 500;
      res.send(error);
    }
  } finally {
    client.close();
    res.end();
  }
};

export { index };
