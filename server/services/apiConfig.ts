import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";
import { Sequelize } from "npm:sequelize@6.37.3";

const env = await load();

const config = {
  database: env["DATABASE"],
  hostname: env["HOSTNAME"],
  password: env["PASSWORD"],
  port: env["DB_PORT"] || 5432,
  user: env["USER"],
};

const client = new Sequelize({
  dialect: "postgres",
  host: config.hostname,
  port: +config.port,
  database: config.database,
  username: config.user,
  password: config.password,
});

export { client };
