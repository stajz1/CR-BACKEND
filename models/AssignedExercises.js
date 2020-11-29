const Sequelize = require("sequelize");

const sequelize = require("../helpers/database");

const assignedExercise = sequelize.define(
    "assignedExercise",
    {
        _id: {
            type: Sequelize.BIGINT.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    }
);

module.exports = assignedExercise;