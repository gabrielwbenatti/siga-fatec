import { Router } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { login } from "../controllers/login.ts";

const loginRoute = new Router();

loginRoute.post("/", login);

export { loginRoute };
