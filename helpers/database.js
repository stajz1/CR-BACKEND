const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        dialect: "mysql",
        host: process.env.DB_HOST,
        dialectOptions: {
            dateStrings: true,
            typeCast: true,
            timezone: "+01:00",
        },
        logging: false,
        timezone: "+01:00",
    }
);

module.exports = sequelize;
