import {Sequelize} from 'sequelize'
import {config} from './config/config';

const db = config.db;
const username = config.username;
const password = config.password;

export const sequelize = new Sequelize(db, username, password, {
  host: "localhost",
  dialect: 'mssql',
  port: 1433,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions:{
    options:{
      trustServerCertificate : false,
      enableArithAbort: true,
      encrypt: false,
    }
  }
});
