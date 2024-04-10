const cron = require('node-cron');
const { generateRandomQuote } = require('../controllers/quoteController');
const sendMail = require('../services/mailService')
const sendMessage = require('../services/messageService')


const task = cron.schedule('*/5 * * * * *', async () => {
    console.log('running a task every minute: ', new Date());
    try {
        const quote = await generateRandomQuote();
        sendMail({ quote: quote.content, author: quote.author });
        // sendMessage({ message: 'Your phone has been hacked' })
        // console.log(quote);
    } catch (err) {
        console.log("Err: ", err);
        return;
    }
}, {
    scheduled: false
});

module.exports = task;
