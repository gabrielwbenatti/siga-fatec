import { Context, Status } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { client } from "../services/apiConfig.ts";
import ClassMaterial from "../models/class-material.ts";
import ClassPlanning from "../models/class-planning.ts";

const indexClasses = async (context: Context) => {
  try {
    await client.connect();

    const result = await client.queryObject(
      `
      SELECT CAST(c.id AS VARCHAR), D.abbreviation || ' - ' || D."name" AS description
      FROM disciplines d
      LEFT JOIN classes c ON c.discipline_id = d.id
      WHERE c.teacher_id = $teacher_id
      `,
      { teacher_id: 3 }
    );

    if (result.rowCount) {
      context.response.status = Status.OK;
      context.response.body = result.rows;
    }
  } catch (error) {
    context.response.status = Status.InternalServerError;
    context.response.body = error;
  }
};

const indexPlanning = async (context: Context) => {
  try {
    const result = await ClassPlanning.findAll({
      attributes: [
        [client.cast(client.col("id"), "varchar"), "id"],
        [client.cast(client.col("class_id"), "varchar"), "class_id"],
        "title",
        "description",
        "planned_date",
        "applied_date",
      ],
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

const indexMaterials = async (context: Context) => {
  try {
    await client.authenticate();

    const result = await ClassMaterial.findAll({
      attributes: [
        [client.cast(client.col("id"), "varchar"), "id"],
        [client.cast(client.col("class_id"), "varchar"), "class_id"],
        "title",
        "description",
        "file_format",
        "file_url",
        "list_index",
      ],
      where: {
        class_id: 2,
      },
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

    const result =
      typeof body === "object"
        ? await ClassMaterial.create(body)
        : await ClassMaterial.bulkCreate(body);

    if (result) {
      context.response.status = Status.Created;
    }
  } catch (error) {
    context.response.status = Status.InternalServerError;
    context.response.body = error;
  }
};

export { indexClasses, indexPlanning, indexMaterials, storeMaterials };
