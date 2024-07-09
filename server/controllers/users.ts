import { Context, Status } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";

import { client } from "../services/apiConfig.ts";

const storeUser = async (context: Context) => {
  const body = await context.request.body.json();
  const salt = await bcrypt.genSalt(8);
  const hash = await bcrypt.hash(body.password, salt);

  await client.connect();
  const transaction = client.createTransaction("storeUser");

  try {
    await transaction.begin();
    const result = await client.queryArray(
      `
      INSERT INTO users(username, password) 
      VALUES($username, $password)
      `,
      { username: body.username, password: hash }
    );

    if (result.rowCount) {
      await transaction.commit();
      context.response.status = Status.Created;
    }
  } catch (error) {
    await transaction.rollback();
    context.response.status = Status.InternalServerError;
    context.response.body = error;
  }
};

export { storeUser };
