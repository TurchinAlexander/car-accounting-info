import * as Sequelize from "sequelize";

export default new Sequelize('test', 'root', 'password', {
  host: 'db',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
