import { Request, Response } from "express";
import ClassMaterial from "../models/class.material.model";
import client from "../services/db";

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
