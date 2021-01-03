const patientServices =require('./../services/patient.service'),
    Constants = require("./../helpers/Constants");

exports.patientList = async (req, res, next) => {

    try {
        let data = await patientServices.patients()
        res.status(200).json(data)
    }catch (e) {
        next(Constants.errors.unAuthorized)
    }
}

exports.patient = async (req, res, next) => {

    try{
        let data = await patientServices.patient(req.params.id)
        res.status(200).json(data)
    }catch (e) {
        next(Constants.errors.unAuthorized)
    }

}

exports.storePatient = async (req, res, next) => {

    try {

        let data = await patientServices.storePatient(req.body)
        res.status(200).json(data);

    }catch (e) {
        next(Constants.errors.server)
    }

}

exports.history = async (req, res, next) => {
    try {
        let data = await patientServices.history(req.params.userId);
        res.status(200).json(data);
    }catch (e) {
        next(Constants.errors.unAuthorized)
    }

}

exports.deleteAssignedExercise = async (req, res, next) => {

    let data = await patientServices.deleteAssignedExercise(req.params)
    res.status(200).json(data);

}

exports.todayTask = async (req, res, next) => {
   /* let data = await patientServices.todayTask(req.body.id);
    res.status(200).json(data);
    try {

    }catch (e) {
        next(Constants.errors.unAuthorized)
    }*/

}

exports.workOut = async (req, res, next) => {

    try {
        let data = await patientServices.workOut(req.body);
        res.status(200).json(data);
    }catch (e) {
        next(Constants.errors.unAuthorized)
    }

}

exports.userDelete = async (req, res, next) => {

    try {
        let data = await patientServices.deleteUser(req.params.id);
        res.status(200).json(data);
    }catch (e) {
        next(Constants.errors.unAuthorized)
    }


}