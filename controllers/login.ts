import { Context } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { client } from "../services/apiConfig.ts";
import { UserModel } from "../models/userModel.ts";

const login = async (context: Context) => {
  const body = await context.request.body.json();

  try {
    await client.connect();
    const result = await client.queryObject<UserModel>(
      `
      SELECT * FROM users WHERE username = $username
      `,
      { username: body.username }
    );

    if (result.rowCount) {
      const isMatch = await bcrypt.compare(
        body.password,
        result.rows[0].password
      );

      if (isMatch) {
        context.response.status = 200;
      } else {
        context.response.status = 400;
      }
    }
  } catch (error) {
    console.error("error", error);
  }
};

export { login };
