const Router = require("express").Router();

const { login, register, list } = require('../controllers/auth.controller')

Router.post('/login', login)
Router.post('/register', register)
Router.get('/userList/:type', list)

module.exports = Router;

