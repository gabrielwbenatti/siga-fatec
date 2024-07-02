import { Router } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { userRouter } from "./user.ts";

const router = new Router();
const prefix = "/api/v1";

router.use(`${prefix}/users`, userRouter.routes());

export { router };
