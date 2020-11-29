const Router = require("express").Router();

const { login, register } = require('../controllers/auth.controller')

Router.post('/login', login)
Router.post('/register', register)

module.exports = Router;

