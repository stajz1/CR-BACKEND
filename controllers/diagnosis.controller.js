const diagnosisServices =require('./../services/diagnosis.service'),
      Constants = require("./../helpers/Constants");

exports.storeDiagnosis = async (req, res, next) => {

    try {
        let data = await diagnosisServices.store(req.body)
        res.status(200).json(data)

    }catch (e) {
        next(Constants.errors.server)
    }

}

exports.diagnosisList = async (req, res, next) => {

    try {
        let data = await diagnosisServices.getList(req.params.userId)
        res.status(200).json(data)

    }catch (e) {
        next(Constants.errors.server)
    }

}
