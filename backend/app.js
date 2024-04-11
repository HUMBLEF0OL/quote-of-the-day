const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cronTask = require('./config/cronConfig');
const cors = require('cors');
const quoteRoute = require('./routes/quoteRoutes')
const userRoute = require('./routes/userRoutes')
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

// app.use(cors())
app.use(cors({
    origin: ['https://quote-of-the-day-nine.vercel.app', 'http://localhost:3000'],
    optionsSuccessStatus: 200
}));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/quote', quoteRoute);

app.use('/user', userRoute);