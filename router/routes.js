const Routes = require("express").Router();

Routes.use('/auth', require('./Auth'))
Routes.use('/patient', require('./Patient'))
Routes.use('/exercise', require('./Exercise'))
Routes.use('/diagnosis', require('./Diagnosis'))
Routes.use('/vitalSign', require('./VitalSign'))



module.exports = Routes;
