const fs = require('fs');
require('dotenv').config()
const fetch = require('node-fetch');

const fetchQuote = async () => {
    const resp = await fetch(`${process.env.QUOTABLE_END_POINT}?limit=150`);
    const result = await resp.json();
    return result.results;
}



fs.readFile('dataset.json', 'utf8', async (err, data = []) => {
    if (err) {
        console.log('Error: Failed to load file', err);
        return;
    }

    const existingQuotes = JSON.parse(data);
    const newQuotes = [];

    const quote = await fetchQuote();
    newQuotes.push(quote);

    existingQuotes.push(...newQuotes);

    fs.writeFile('dataset.json', JSON.stringify(existingQuotes), (err) => {
        console.log(existingQuotes)
        if (err) {
            console.log("Failed to save file")
        } else {
            console.log("data written successfully")
        }
    })

})


