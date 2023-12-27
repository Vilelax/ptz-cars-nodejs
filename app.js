const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const sequelize = require('./src/utils/database');
const bootstrap = require('./src/utils/dbbootstrap');

const manufacturerRouter = require('./src/routes/manufacturer');
const carModelRouter = require('./src/routes/car-model');
const lastownerRouter = require('./src/routes/last-owner');
const carRouter = require('./src/routes/car');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/manufacturers', manufacturerRouter);
app.use('/car-models', carModelRouter);
app.use('/last-owners', lastownerRouter);
app.use('/cars', carRouter);

bootstrap();

sequelize
    .sync()
    .then(result => {
        console.log(result);
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });

