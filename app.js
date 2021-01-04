const express = require("express"),
      dotenv = require("dotenv"),
      bodyParser = require('body-parser');
const path = require("path");

dotenv.config();
process.env.TZ = "Asia/Calcutta";

const sequelize = require("./helpers/database");

const app = express();

app.use(
    "/uploads",
    express.static(path.join(process.env.APPPATH,  "uploads"))
);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { handleError } = require("./helpers/Error");


const Router = require('./router/routes');
app.use('/api', Router)

app.use((err, req, res, next) => {
    if (!err) return;

    console.error(err);

    let message = err.message;
    let statusCode = err.statusCode;

    if (err.hasOwnProperty("statusCode")) {
        return handleError(err, res);
    }

    handleError(
        {
            statusCode: statusCode,
            message: message,
        },
        res
    );
});

// Sequelize Create Tables

require("./models/Relations");
sequelize
    .sync({alter: false})
    .then(() => {
        app.listen(8000, () => {
            console.log("Server is up and Running!");
        });
    })
    .catch((err) => {
        console.error(`Sequelize Error : ${err}`);
    });
