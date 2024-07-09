import { Context, Status } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { client } from "../services/apiConfig.ts";

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
    await client.connect();

    const result = await client.queryObject(
      `
      SELECT CAST(id AS VARCHAR), CAST(class_id AS VARCHAR), title, description, planned_date, applied_date
      FROM class_planning  
      WHERE class_id = $class_id
      `,
      { class_id: 2 }
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

const indexMaterials = async (context: Context) => {
  try {
    await client.connect();

    const result = await client.queryObject(
      `
      SELECT CAST(id AS VARCHAR), CAST(class_id AS VARCHAR), title, description, file_format, file_url, list_index
      FROM public.class_materials 
      WHERE class_id = $class_id
      `,
      { class_id: 2 }
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

const storeMaterials = async (context: Context) => {
  const body = await context.request.body.json();

  await client.connect();

  try {
    const result = await client.queryObject(
      `
        INSERT INTO class_materials
        (class_id, title, description, file_format, file_url, list_index)
        VALUES 
        ($class_id, $title, $description, $file_format, $file_url, $list_index)
        `,
      {
        class_id: body.class_id,
        title: body.title,
        description: body.description,
        file_format: body.file_format,
        file_url: body.file_url,
        list_index: -1,
      }
    );

    if (result.rowCount) {
      context.response.status = Status.Created;
    }
  } catch (error) {
    console.log("err", error);
    context.response.status = Status.InternalServerError;
    context.response.body = error;
  }
};

export { indexClasses, indexPlanning, indexMaterials, storeMaterials };
