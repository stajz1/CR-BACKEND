const VitalSignsModel = require('./../models/VitalSigns');

exports.store = async (data) => {

    // let { vitalSign, value, userId } = data;

    let storeNewDiagnosisData = await VitalSignsModel.create(data)

    return {
        status: !!storeNewDiagnosisData
    };

}

exports.getList = async (userId) => {

    return VitalSignsModel.findAll({
        where:{
            userId: userId
        }
    })

}
