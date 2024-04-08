const cron = require('node-cron');

const task = cron.schedule('*/5 * * * * *', () => {
    // console.log('running a task every minute: ', new Date());
}, {
    scheduled: false
});

module.exports = task;
