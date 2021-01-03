const Diagnosis = require('./../models/Diagnosis');

exports.store = async (data) => {

    // let { userId, newDiagnosis, date, therapy  } = data;

    let storeNewDiagnosisData = await Diagnosis.create(data)

    return {
        status: !!storeNewDiagnosisData
    };

}

exports.getList = async (userId) => {

    return Diagnosis.findAll({
        where:{
            userId: userId
        }
    })

}

exports.deleteDiagnosis = async (id) => {

    return Diagnosis.destroy({
        where: {
            _id: id
        }
    })

}