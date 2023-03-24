const Sequelize = require('sequelize');

const sequelize = new Sequelize("chatapp", "root", "mayur123@#", {
    dialect: 'mysql',
    host: "localhost"
  });

module.exports = sequelize;