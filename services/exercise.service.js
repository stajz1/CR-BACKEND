const ExerciseCategoryModel = require('./../models/ExerciseCategory'),
      ExerciseModel = require('./../models/Exercises'),
    UserModel = require('./../models/User'),
    AssignedExerciseModel = require('./../models/AssignedExercises');

exports.exerciseCategoryList = async () => {

    return ExerciseCategoryModel.findAll()
}

exports.exercisesList = (id) => {
    return ExerciseModel.findAll({
        where:{
            exerciseCategoryId: id
        }
    })

}
exports.exercise = (id) => {
    return ExerciseModel.findByPk(id)

}

exports.storeCategory = (categoryImage, categoryName) => {

    return ExerciseCategoryModel.create({
        categoryName: categoryName,
        categoryImage: categoryImage
    })

}

exports.storeExercise = (data, image1, image2) => {

    let { exerciseCategoryId, exerciseName, exerciseDetail } = data;

    return ExerciseModel.create({
        exerciseCategoryId: exerciseCategoryId,
        exerciseName: exerciseName,
        image1Name: image1,
        image2Name: image2,
        exerciseDetail: exerciseDetail
    })

}

exports.assignExercise = async (data) => {
    let createAssignExercise = await AssignedExerciseModel.create(data); // userId, exerciseId
    return {
        status: !!createAssignExercise
    }
}

exports.assignedExerciseList = async (id) => {

    return AssignedExerciseModel.findAll({
        where: {
            userId : id
        },
        include: [
            {
                model: ExerciseModel
            }
        ]

    })

}

exports.deleteExerciseList = async (id) => {

    return ExerciseModel.destroy({
        where: {
            _id: id
        }
    })

}

exports.deleteCategory = async (id) => {

    return ExerciseCategory.destroy({
        where: {
            _id: id
        }
    })

}