const client = require('../config/messageConfig');

const sendMessage = ({ message }) => {
    try {
        client.messages.create({
            body: message,
            to: 'XXX',
            from: 'XXX'
        }).then((message) => {
            console.log(message);
        })
    } catch (err) {
        console.log("Failed to send message: ", err);
    }
}

module.exports = sendMessage;

