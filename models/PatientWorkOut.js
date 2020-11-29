const Sequelize = require("sequelize");

const sequelize = require("../helpers/database");

const patientWorkOut = sequelize.define(
    "patientWorkOut",
    {
        _id: {
            type: Sequelize.BIGINT.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        steps: {
            type: Sequelize.INTEGER(8).UNSIGNED,
            allowNull: true
        }
    }
);

module.exports = patientWorkOut;