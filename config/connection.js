require('dotenv').config();
const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.js');

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: process.env.dialect,
  }
);
module.exports = sequelize;
