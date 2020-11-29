const Router = require("express").Router();

const { patientList, patient, history, todayTask, storePatient, workOut } = require('../controllers/patient.controller')

Router.get('/list', patientList)
Router.get('/history/:userId', history)
Router.get('/todayTask', todayTask)
Router.post('/storePatient', storePatient)
Router.post('/workOut', workOut)
Router.get('/:id', patient)

module.exports = Router;

