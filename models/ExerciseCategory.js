const Sequelize = require("sequelize");

const sequelize = require("../helpers/database");

const exerciseCategory = sequelize.define(
    "exerciseCategory",
    {
        _id: {
            type: Sequelize.BIGINT.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        categoryName: {
            type: Sequelize.STRING(64),
            allowNull: true
        },

    }
);

module.exports = exerciseCategory;
