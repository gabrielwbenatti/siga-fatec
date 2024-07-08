import { Context, Status } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import * as djwt from "https://deno.land/x/djwt@v3.0.2/mod.ts";

import { findByUsername } from "../models/userModel.ts";
import { key } from "../utils/jwt.ts";

const login = async (context: Context) => {
  const body = await context.request.body.json();

  try {
    const user = await findByUsername(body.username);
    const isMatch = await bcrypt.compare(body.password, user!.password);

    if (!user || !isMatch) {
      context.response.status = Status.Unauthorized;
      context.response.body = { message: "Invalid credentials" };
      return;
    }

    const payload = {
      id: Number(user.id),
    };

    const jwt = await djwt.create({ alg: "HS512", typ: "jwt" }, payload, key);
    context.response.body = { token: jwt };
  } catch (error) {
    console.error("error", error);
  }
};

export { login };
