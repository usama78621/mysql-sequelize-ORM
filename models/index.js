const dbConfig = require("../db/config");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.max,
    min: dbConfig.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./products.js")(sequelize, DataTypes);

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
module.exports = db;
