const Sequelize = require("sequelize");

const sequelize = require("../helpers/database");

const VitalSign = sequelize.define(
    "vitalSign",
    {
        _id: {
            type: Sequelize.BIGINT.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        vitalSign: {
            type: Sequelize.STRING(64),
            allowNull: true
        },
        value: {
            type: Sequelize.STRING(64),
            allowNull: true
        },
        valueMax: {
            type: Sequelize.STRING(64),
            allowNull: true
        },
    }
);

module.exports = VitalSign;
