import { Context, Status } from "https://deno.land/x/oak@v16.1.0/mod.ts";

import ClassMaterial from "../models/class-material.ts";
import { client } from "../services/apiConfig.ts";

const indexMaterials = async (context: Context) => {
  try {
    await client.authenticate();

    const result = await ClassMaterial.findAll({
      where: {
        class_id: 2,
      },
      order: ["list_index", "title"],
    });

    if (result) {
      context.response.status = Status.OK;
      context.response.body = result;
    }

    return;
  } catch (error) {
    context.response.status = Status.InternalServerError;
    context.response.body = error;
  }
};

const storeMaterials = async (context: Context) => {
  const body = await context.request.body.json();

  try {
    await client.authenticate();

    if (Array.isArray(body)) {
      await ClassMaterial.bulkCreate(body).then((rows) => {
        if (rows.length) {
          context.response.status = Status.OK;
        }
      });
    } else {
      await ClassMaterial.create(body).then((material) => {
        if (material) {
          context.response.status = Status.OK;
        }
      });
    }
  } catch (error) {
    context.response.status = Status.InternalServerError;
    context.response.body = error;
  }
};

const deleteMaterials = async (context: Context) => {
  const id = context.params.id;

  try {
    await client.authenticate();

    await ClassMaterial.findOne({ where: { id: id } }).then((material) => {
      if (material) {
        material.destroy();
        context.response.status = Status.OK;
      } else {
        context.response.status = Status.NoContent;
      }
    });
  } catch (error) {
    context.response.status = Status.InternalServerError;
    context.response.body = error;
  }
};

export { indexMaterials, storeMaterials, deleteMaterials };
