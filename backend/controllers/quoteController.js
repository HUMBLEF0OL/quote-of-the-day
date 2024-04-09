const Quote = require('../models/Quote');
const dataSet = require('../dataset.json');
const populatedb = async (req, res) => {
    try {
        // create collection
        await Quote.createCollection();
        console.log("collection created!");
        const result = await Quote.insertMany(dataSet);
        res.json(result);
    } catch (err) {
        console.log("Operation failed with error: ", err)
    }
}

const generateRandomQuote = async () => {
    try {
        const quoteCount = await Quote.countDocuments();
        const randomIndex = Math.floor(Math.random() * quoteCount);

        // find quote
        const quote = await Quote.findOne().skip(randomIndex);
        // console.log(randomIndex, quoteCount)
        return quote;
    } catch (err) {
        console.log("Err: ", err)
        return err;
    }
}

module.exports = {
    populatedb,
    generateRandomQuote
}