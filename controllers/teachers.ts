import { Context } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { client } from "../services/apiConfig.ts";

const storeTeacher = async (context: Context) => {
  const body = await context.request.body.json();

  try {
    await client.connect();
    const transaction = client.createTransaction("storeTeacher");

    transaction.begin();
    const result = await client.queryArray(
      `
      INSERT INTO teachers
        (user_id, teach_since, document, first_name, last_name)
      VALUES
        ($user_id, $teach_since, $document, $first_name, $last_name)
      `,
      {
        user_id: body.user_id,
        teach_since: body.teach_since,
        document: body.document,
        first_name: body.first_name,
        last_name: body.last_name,
      }
    );

    if (result.rowCount) {
      transaction.commit();
      context.response.status = 201;
    }
  } catch (error) {}
};

export { storeTeacher };
