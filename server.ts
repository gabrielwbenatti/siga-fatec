import { Application } from "https://deno.land/x/oak@v16.1.0/mod.ts";
import { router } from "./routes/index.ts";

const app = new Application();
const port = Deno.env.get("PORT") || 8000;

app.use(router.routes()).use(router.allowedMethods());

console.log(`Server is running on port ${port}`);

await app.listen({ port: +port });
