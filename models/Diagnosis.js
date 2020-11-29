const Sequelize = require("sequelize");

const sequelize = require("../helpers/database");

const Diagnosis = sequelize.define(
    "diagnosis",
    {
        _id: {
            type: Sequelize.BIGINT.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        newDiagnosis: {
            type: Sequelize.STRING(64),
            allowNull: true
        },
        date: {
            type: Sequelize.STRING(64),
            allowNull: true
        },
        therapy: {
            type: Sequelize.STRING(64),
            allowNull: true
        }
    }
);

module.exports = Diagnosis;
