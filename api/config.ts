import { Sequelize } from "sequelize-typescript";
import { Users } from "./model";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  port: 3306,
  database: "test-express",
  logging: true,
  models: [Users],
});

export default connection;
