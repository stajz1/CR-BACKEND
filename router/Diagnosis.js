const Router = require("express").Router();

    const { storeDiagnosis, diagnosisList, deleteDiagnosis } = require('../controllers/diagnosis.controller')

Router.post('/storeDiagnosis', storeDiagnosis)
Router.get('/diagnosisList/:userId', diagnosisList)
Router.delete('/diagnosisList/:diagnosisId', deleteDiagnosis)

module.exports = Router;

