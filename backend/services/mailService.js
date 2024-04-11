const User = require('../models/User');
const transporter = require('../config/mailConfig');
const generateEmailContent = require('./emailTemplate');

const sendMail = async ({ quote, author }) => {
    const emailTemplate = generateEmailContent(quote, author);
    try {
        const users = await User.find().select('email');
        const emails = users.map((current) => {
            return current.email;
        }).toString();

        const info = await transporter.sendMail({
            subject: `Quote of the Day${Math.random() * 10}`,
            to: emails,
            html: emailTemplate
        });

        console.log("Message sent: ", info.messageId);
    } catch (err) {
        console.log("Operation Failed at sendMail: ", err);
    }

}

module.exports = sendMail;
