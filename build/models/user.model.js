"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = __importStar(require("sequelize"));
var sequelize_1 = require("../sequelize");
exports.Users_Model = sequelize_1.sequelize.define('users', {
    User_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    First_Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Last_Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: "users"
});
