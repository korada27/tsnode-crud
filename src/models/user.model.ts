import * as Sequelize from 'sequelize';
import { sequelize } from '../sequelize';

export const Users_Model: any = sequelize.define('users', {
    User_Id: {
        type: Sequelize.INTEGER, // you can omit the `new` but this is discouraged
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
