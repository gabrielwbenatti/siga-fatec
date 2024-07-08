import { Client } from "https://deno.land/x/postgres@v0.19.3/mod.ts";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const env = await load();

const config = {
  database: env["DATABASE"],
  hostname: env["HOSTNAME"],
  password: env["PASSWORD"],
  port: env["PORT"] || 5432,
  user: env["USER"],
};

const client = new Client(config);

export { client };
