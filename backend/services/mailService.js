const transporter = require('../config/mailConfig');
const generateEmailContent = require('./emailTemplate');

const sendMail = async ({ quote, author }) => {
    const emailTemplate = generateEmailContent(quote, author);

    const info = await transporter.sendMail({
        subject: `Quote of the Day${Math.random() * 10}`,
        html: emailTemplate
    });

    console.log("Message sent: ", info.messageId);
}

module.exports = sendMail;
