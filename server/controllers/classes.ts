import { Context, Status } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { QueryTypes } from "npm:sequelize@6.37.3";

import { client } from "../services/apiConfig.ts";

import { indexPlanning, storePlanning } from "./class-planning.ts";
import { indexMaterials, storeMaterials } from "./class-materials.ts";

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

export {
  indexClasses,
  indexPlanning,
  indexMaterials,
  storePlanning,
  storeMaterials,
};
