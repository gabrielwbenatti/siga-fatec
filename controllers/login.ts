import { Context } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";

import { client } from "../services/apiConfig";

const login = async (ctx: Context) => {
  const { username, password } = await ctx.request.body.json();
  const salt = await bcrypt.genSalt(8);
  const hash = await bcrypt.hash(password, salt);

  try {
    await client.connect();
    const result = await client.queryObject(
      `
      SELECT * FROM users WHERE username = $username
      `,
      { username: username }
    );

    if (result.rowCount) {
      const compare = await bcrypt.compare(result.rows, hash);
      if (compare) {
        ctx.response.status = 200;
      }
    }
  } catch (error) {
    console.error("error", error);
  }
};

export { login };
