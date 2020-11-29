const vitalSignsServices =require('./../services/vitalsigns.service'),
    Constants = require("./../helpers/Constants");

exports.storeVitalSigns = async (req, res, next) => {

    try {
        let data = await vitalSignsServices.store(req.body)
        res.status(200).json(data)

    }catch (e) {
        next(Constants.errors.server)
    }

}

exports.vitalSignsList = async (req, res, next) => {

    try {
        let data = await vitalSignsServices.getList(req.params.userId)
        res.status(200).json(data)

    }catch (e) {
        next(Constants.errors.server)
    }

}
