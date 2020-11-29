const Router = require("express").Router();

const { storeVitalSigns, vitalSignsList } = require('../controllers/vitalsigns.controller')

Router.post('/storeVitalSigns', storeVitalSigns)
Router.get('/vitalSignsList/:userId', vitalSignsList)

module.exports = Router;

