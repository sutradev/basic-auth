require("dotenv").config();
const { start } = require("./src/server.js");
const { sequelize } = require("./src/auth/models");

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    start(PORT);
  })
  .catch((error) => {
    console.error("DATABASE ERROR", error);
  });
