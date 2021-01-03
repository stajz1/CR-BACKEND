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
            userId: id,
        },
        order: [
            ['createdAt', 'DESC'],
        ],
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

exports.deleteAssignedExercise = async (data) => {

    let { exerciseId, userId } = data;

    let deletedData = AssignedExercises.destroy({
        where :{
            userId: userId,
            exerciseId: exerciseId,
        }
    })

    return {
        status: !!deletedData
    }

}

/*
exports.todayTask = async () => {

    return PatientWorkOut.findAll({
        where:{

        },
        attributes: ['steps', 'exerciseId', [sequelize.fn('count', sequelize.col('exerciseId')), 'count']],
        group : ['exerciseId'],
        raw: true,
        order: sequelize.literal('count DESC')})

}

*/

exports.deleteUser = async (id) => {

    return User.destroy({
        where: {
            _id: id
        }
    })

}