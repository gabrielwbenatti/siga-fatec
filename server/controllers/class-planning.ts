import { Context, Status } from "https://deno.land/x/oak@v16.1.0/mod.ts";

import ClassPlanning from "../models/class-planning.ts";
import { client } from "../services/apiConfig.ts";

const indexPlanning = async (context: Context) => {
  try {
    await client.authenticate();

    const result = await ClassPlanning.findAll({
      where: {
        class_id: 2,
      },
    });

    if (result) {
      context.response.status = Status.OK;
      context.response.body = result;
    }
  } catch (error) {
    context.response.status = Status.InternalServerError;
    context.response.body = error;
  }
};

const storePlanning = async (context: Context) => {
  const body = await context.request.body.json();

  try {
    await client.authenticate();

    if (Array.isArray(body)) {
      await ClassPlanning.bulkCreate(body).then((rows) => {
        if (rows.length) {
          context.response.status = Status.Created;
        }
      });
    } else {
      await ClassPlanning.create(body).then((planning) => {
        if (planning) {
          context.response.status = Status.Created;
        }
      });
    }
  } catch (error) {
    context.response.status = Status.InternalServerError;
    context.response.body = error;
  }
};

const deletePlanning = async (context: Context) => {
  const id = context.params.id;

  try {
    await client.authenticate();

    await ClassPlanning.findOne({ where: { id: id } }).then((planning) => {
      if (planning) {
        planning.destroy();
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

export { indexPlanning, storePlanning, deletePlanning };
