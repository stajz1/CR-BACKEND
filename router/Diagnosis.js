const Router = require("express").Router();

const { storeDiagnosis, diagnosisList } = require('../controllers/diagnosis.controller')

Router.post('/storeDiagnosis', storeDiagnosis)
Router.get('/diagnosisList/:userId', diagnosisList)

module.exports = Router;

