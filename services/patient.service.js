const User = require('./../models/User'),
      PatientWorkOut = require('./../models/PatientWorkOut'),
      Exercises = require('./../models/Exercises'),
      AssignedExercises = require('./../models/AssignedExercises'),
      Constants = require("./../helpers/Constants");

const sequelize = require("../helpers/database");

exports.patients = ()=> {

    return User.findAll({
        where: {
            userType: Constants.keyValue.user
        }
    })

}

exports.patient = (id) => {

    return User.findByPk(id)

}

exports.history = (id) => {

    return PatientWorkOut.findAll({
        where: {
            userId: id
        },
        include: [
            {
                model: Exercises
            }
        ]
    })

}

exports.todayTask = (id) => {

    return AssignedExercises.findAll({
        where: {
            userId: id
        },
        include: [
            {
                model: User
            },
            {
                model: Exercises
            }
        ]
    })

}

exports.storePatient = async (data) => {

    let patient = await User.create(data)

    return {
        status: !!patient
    }
}


exports.workOut = async (data) => {

    let { exerciseId, steps, userId } = data;

    let storeData = await PatientWorkOut.create({
        userId: userId,
        exerciseId: exerciseId,
        steps: steps
    })

    return {
        status: !!storeData
    }

}


/*
exports.workOut = async () => {

    return PatientWorkOut.findAll({
        attributes: ['steps', 'exerciseId', [sequelize.fn('count', sequelize.col('exerciseId')), 'count']],
        group : ['exerciseId'],
        raw: true,
        order: sequelize.literal('count DESC')    })

}
*/

