import { Context, Status } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";

import { client } from "../services/apiConfig.ts";
import User from "../models/user.ts";

const storeUser = async (context: Context) => {
  const body = await context.request.body.json();
  const salt = await bcrypt.genSalt(8);
  const hash = await bcrypt.hash(body.password, salt);

  try {
    await client.authenticate();

    const user = await User.create({
      username: body.username,
      password: hash,
    });

    if (user) {
      context.response.status = Status.Created;
    }
  } catch (error) {
    context.response.status = Status.InternalServerError;
    context.response.body = error;
  }
};

export { storeUser };
