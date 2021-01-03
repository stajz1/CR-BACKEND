const Router = require("express").Router();

const { patientList, userDelete, patient, history, deleteAssignedExercise, todayTask, storePatient, workOut } = require('../controllers/patient.controller')

Router.get('/list', patientList)
Router.get('/history/:userId', history)
Router.get('/todayTask', todayTask)
Router.post('/storePatient', storePatient)
Router.delete('/deletePatientExercise/:exerciseId/:userId', deleteAssignedExercise)
Router.post('/workOut', workOut)
Router.get('/:id', patient)
Router.delete('/:id', userDelete)

module.exports = Router;

