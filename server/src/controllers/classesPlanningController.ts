import { Request, Response } from "express";
import client from "../services/db";
import ClassPlanning from "../models/ClassPlanning";
import StatusCode from "../utils/http-status-code";

const index = async (_: Request, res: Response) => {
  try {
    await client.authenticate();

    try {
      const result = await ClassPlanning.findAll({
        where: { class_id: 2 },
      });

      if (result) {
        res.send(result);
        res.statusCode = StatusCode.Ok;
      } else {
        res.statusCode = StatusCode.NoContent;
      }
    } catch (error) {
      res.statusCode = StatusCode.InternalError;
      res.send(error);
    }
  } finally {
    client.close();
    res.end();
  }
};

export { index };
