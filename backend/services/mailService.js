const transporter = require('../config/mailConfig');
const generateEmailContent = require('./emailTemplate');

const sendMail = async () => {
    const quote = "dummy quote"
    const author = "humblefool"
    const emailTemplate = generateEmailContent(quote, author);

    const info = await transporter.sendMail({
        to: 'kanikamaheshwari816@gmail.com,ashi.saakshi@gmail.com',
        subject: 'Quote of the Day',
        html: emailTemplate
    });

    console.log("Message sent: ", info.messageId);
}

module.exports = sendMail;

// kanikamaheshwari816@gmail.com