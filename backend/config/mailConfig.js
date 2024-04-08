const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,

    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.KEY
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = transporter;