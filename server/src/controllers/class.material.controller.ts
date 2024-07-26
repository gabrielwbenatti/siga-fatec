import { Request, Response } from "express";
import ClassMaterial from "../models/class.material.model";
import client from "../services/db";
import { StatusCode } from "../utils/http.status.code";

const index = async (_: Request, res: Response) => {
  try {
    await client.authenticate();

    try {
      const result = await ClassMaterial.findAll({
        where: { class_id: 2 },
        order: ["list_index", "title"],
      });

      if (result) {
        res.send(result);
        res.statusCode = StatusCode.Ok;
      } else {
        res.statusCode = StatusCode.Created;
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

const store = async (req: Request, res: Response) => {
  const values = (req.body as Array<ClassMaterial>) || [];

  const newValues = values.map((item, index) => ({
    ...item,
    list_index: index + 1,
  }));

  try {
    await client.authenticate();

    try {
      await ClassMaterial.bulkCreate(newValues).then((result) => {
        if (result) {
          res.statusCode = StatusCode.Created;
        }
      });
    } catch (error) {
      res.statusCode = StatusCode.InternalError;
      res.send(error);
    }
  } finally {
    client.close();
    res.end();
  }
};

export { index, store };
