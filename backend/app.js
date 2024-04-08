const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const quoteRoute = require('./routes/quoteRoutes')
const app = express();

try {

    mongoose.connect(process.env.DB_URL).then((err) => {
        app.listen(process.env.PORT, () => {
            console.log("listening on: ", process.env.PORT)
        });
    });
} catch (err) {
    console.log("connection failed with:  ", err);

}



app.use('/quote', quoteRoute);