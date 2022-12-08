const Sequelize = require("sequelize");

require("dotenv").config();
const sequelize = new Sequelize(
  process.env.db,
  process.env.username,
  process.env.password,
  {
    host: process.env.host,
    dialect: process.env.dialect,
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

module.exports = { sequelize };
