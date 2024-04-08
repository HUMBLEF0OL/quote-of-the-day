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

module.exports = {
    populatedb,
}