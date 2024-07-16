import { Context, Status } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { client } from "../services/apiConfig.ts";
import Teacher from "../models/teacher.ts";

const storeTeacher = async (context: Context) => {
  const body = await context.request.body.json();

  try {
    await client.authenticate();

    await Teacher.create({
      user_id: body.user_id,
      teach_since: body.teach_since || null,
      document: body.document,
      first_name: body.first_name,
      last_name: body.last_name,
    }).then((teacher) => {
      if (teacher) {
        context.response.status = Status.Created;
      }
    });
  } catch (error) {
    context.response.status = Status.InternalServerError;
    context.response.body = error;
  }
};

export { storeTeacher };
