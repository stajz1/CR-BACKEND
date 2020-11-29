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
            timezone: "+05:30",
        },
        logging: false,
        timezone: "+05:30",
    }
);

module.exports = sequelize;
