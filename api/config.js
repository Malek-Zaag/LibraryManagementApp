const Sequelize = require("sequelize");

require("dotenv").config();
const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER || "root",
  process.env.PASS,
  {
    host: process.env.HOST,
    dialect: "mysql",
  }
);
console.log(process.env.DB, process.env.USER, process.env.PASS);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = { sequelize };
