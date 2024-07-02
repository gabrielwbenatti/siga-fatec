import {
  Context,
  Middleware,
  Next,
} from "https://deno.land/x/oak@v16.1.0/mod.ts";

const authMiddleware: Middleware = async (context: Context, next: Next) => {
  const { headers } = context.request;
  const authorization = headers.get("Authorization");

  if (!authorization) {
    context.response.status = 401;
    context.response.body = { message: "Unauthorized" };
    return;
  }
};

export { authMiddleware };
