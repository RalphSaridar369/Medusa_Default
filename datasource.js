const { DataSource } = require("typeorm");

const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: process.env.DB_USERNAME,
  password: "ralphralph",
  database: "test",
  entities: ["dist/models/*.js"],
  migrations: ["dist/migrations/*.js"],
});

module.exports = {
  datasource: AppDataSource,
};
