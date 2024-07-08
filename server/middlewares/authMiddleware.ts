import { verify } from "https://deno.land/x/djwt@v3.0.2/mod.ts";
import {
  Context,
  Middleware,
  Next,
  Status,
} from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { key } from "../utils/jwt.ts";

const authMiddleware: Middleware = async (context: Context, next: Next) => {
  const { headers } = context.request;
  const authorization = headers.get("Authorization");

  if (!authorization) {
    context.response.status = Status.Unauthorized;
    context.response.body = { message: "Unauthorized" };
    return;
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const payload = await verify(token, key);
    context.state.user = payload.id;
    await next();
  } catch (_error) {
    context.response.status = Status.Unauthorized;
    context.response.body = { message: "Unauthorized" };
  }
};

export { authMiddleware };
