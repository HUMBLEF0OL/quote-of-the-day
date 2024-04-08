const express = require('express');
const route = express.Router();
const { populatedb } = require('../controllers/quoteController')


route.get('/', (req, res) => {
    res.send('Parent route for quotes')
})

route.get('/populatedb', populatedb)

module.exports = route;