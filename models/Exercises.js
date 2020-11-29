const Sequelize = require("sequelize");

const sequelize = require("../helpers/database");

const exerciseCategory = sequelize.define(
    "exercise",
    {
        _id: {
            type: Sequelize.BIGINT.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        exerciseName: {
            type: Sequelize.STRING(64),
            allowNull: true
        },
        image1Name: {
            type: Sequelize.STRING(64),
            allowNull: true
        },
        image2Name: {
            type: Sequelize.STRING(64),
            allowNull: true
        },
        exerciseDetail: {
            type: Sequelize.TEXT,
            allowNull: true
        }

    }
);

module.exports = exerciseCategory;