import { Context, Status } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { QueryTypes } from "npm:sequelize@6.37.3";
import { client } from "../services/apiConfig.ts";
import ClassMaterial from "../models/class-material.ts";
import ClassPlanning from "../models/class-planning.ts";

const indexClasses = async (context: Context) => {
  try {
    await client.authenticate();

    const result = await client.query(
      ` 
      SELECT CAST(c.id AS VARCHAR), D.abbreviation || ' - ' || D."name" AS description
      FROM disciplines d
      LEFT JOIN classes c ON c.discipline_id = d.id
      WHERE c.teacher_id = :teacher_id
      `,
      {
        replacements: { teacher_id: 3 },
        type: QueryTypes.SELECT, // retorna somente o 'result', sem a 'metadata'
      }
    );

    if (result) {
      context.response.status = Status.OK;
      context.response.body = result;
    }
  } catch (error) {
    context.response.status = Status.InternalServerError;
    context.response.body = error;
  }
};

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

    const result = Array.isArray(body)
      ? await ClassPlanning.bulkCreate(body)
      : await ClassPlanning.create(body);

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

    const result = Array.isArray(body)
      ? await ClassMaterial.bulkCreate(body)
      : await ClassMaterial.create(body);

    if (result) {
      context.response.status = Status.OK;
      context.response.body = result;
    }
  } catch (error) {
    context.response.status = Status.InternalServerError;
    context.response.body = error;
  }
};

export {
  indexClasses,
  indexPlanning,
  storePlanning,
  indexMaterials,
  storeMaterials,
};
