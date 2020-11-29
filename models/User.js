const Sequelize = require("sequelize");

const sequelize = require("../helpers/database");

const User = sequelize.define(
    "user",
    {
        _id: {
            type: Sequelize.BIGINT.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        fullName: {
            type: Sequelize.STRING(64),
            allowNull: true
        },
        userName: {
            type: Sequelize.STRING(64),
            unique: true,
            allowNull: true
        },
        password: {
            type: Sequelize.STRING(64),
            unique: true,
            allowNull: true
        },
        age: {
            type: Sequelize.STRING(64),
            allowNull: true
        },
        userType: {
            type: Sequelize.STRING(64),
            allowNull: true
        }
    },
    {
        defaultScope: {
            attributes: { exclude: ["password"] }
        }
    }
);

module.exports = User;
