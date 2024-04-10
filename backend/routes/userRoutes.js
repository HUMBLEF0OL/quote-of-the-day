const express = require('express');
const registerUser = require('../controllers/userController')

const routes = express.Router();

routes.post('/register', registerUser)



module.exports = routes;