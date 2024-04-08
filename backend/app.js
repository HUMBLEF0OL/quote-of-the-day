const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const quoteRoute = require('./routes/quoteRoutes')
const cronTask = require('./config/cronConfig');
const sendMail = require('./services/mailService');

const app = express();

try {

    mongoose.connect(process.env.DB_URL).then((err) => {
        app.listen(process.env.PORT, () => {
            console.log("listening on: ", process.env.PORT);
            cronTask.start();
            try {
                sendMail();
            } catch (err) {
                console.log("failed to send email with error: ", err);
            }

        });
    });
} catch (err) {
    console.log("connection failed with:  ", err);

}



app.use('/quote', quoteRoute);