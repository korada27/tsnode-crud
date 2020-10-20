"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var config_1 = require("./config/config");
var db = config_1.config.db;
var username = config_1.config.username;
var password = config_1.config.password;
exports.sequelize = new sequelize_1.Sequelize(db, username, password, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,
    logging: false,
});
