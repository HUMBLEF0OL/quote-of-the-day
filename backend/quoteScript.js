const fs = require('fs');
require('dotenv').config()
const fetch = require('node-fetch');


const fetchQuote = async () => {
    const resp = await fetch(process.env.QUOTABLE_END_POINT);
    const result = await resp.json();
    return result;
}
fetchQuote();
