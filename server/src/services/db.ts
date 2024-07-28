import { Sequelize } from "sequelize";

const client = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "sigadb",
  username: "postgres",
  password: "postgres",
});

export default client;
