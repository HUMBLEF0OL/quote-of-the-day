const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const quoteRoute = require('./routes/quoteRoutes')
const cronTask = require('./config/cronConfig');
const sendMail = require('./services/mailService');
const { generateRandomQuote } = require('./controllers/quoteController');

const app = express();

try {

    mongoose.connect(process.env.DB_URL).then((err) => {
        app.listen(process.env.PORT, async () => {
            console.log("listening on: ", process.env.PORT);
            cronTask.start();

        });
    });
} catch (err) {
    console.log("connection failed with:  ", err);

}



app.use('/quote', quoteRoute);