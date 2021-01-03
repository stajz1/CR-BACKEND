const exerciseServices =require('./../services/exercise.service'),
    Constants = require("./../helpers/Constants");

exports.exerciseCategory = async (req, res, next) => {
    let data = await exerciseServices.exerciseCategoryList()
    res.status(200).json(data);
    try {

    }catch (e) {
        next(Constants.errors.server)
    }

}

exports.exercisesList = async (req, res, next) => {
    let data = await exerciseServices.exercisesList(req.params.categoryId)
    res.status(200).json(data);
    try {

    }catch (e) {
        next(Constants.errors.server)
    }

}

exports.exercise = async (req, res, next) => {

    try {
        console.log(req.params.exerciseId)
        let data = await exerciseServices.exercise(req.params.exerciseId)
        res.status(200).json(data);
    }catch (e) {
        next(Constants.errors.unAuthorized)
    }

}

exports.storeCategory = async (req, res, next) => {
    let data = await exerciseServices.storeCategory(req.categoryImage,  req.body.categoryName)
    res.status(200).json(data);
    try {

    }catch (e) {
        next(Constants.errors.unAuthorized)
    }

}


exports.storeExercise = async (req, res, next) => {

    try {
        let data = await exerciseServices.storeExercise(req.body, req.image1, req.image2)
        res.status(200).json(data);
    }catch (e) {
        next(Constants.errors.unAuthorized)
    }

}

exports.assignExercise = async (req, res, next) => {

    try {
        let data = await exerciseServices.assignExercise(req.body);
        res.status(200).json(data);
    }catch (e) {
        next(Constants.errors.unAuthorized)
    }

}

exports.fetchAssignedExercise = async (req, res, next) => {

    try {

        let data = await exerciseServices.assignedExerciseList(req.params.id)
        res.status(200).json(data);

    }catch (e) {
        next(Constants.errors.unAuthorized)

    }

}


exports.deleteExercise = async (req, res, next) => {

    try {
        let data = await exerciseServices.deleteExerciseList(req.params.id)
        res.status(200).json({status: !!data});
    }catch (e) {
        next(Constants.errors.unAuthorized)
    }

}

exports.deleteCategory = async (req, res, next)=> {

    try {
        let data = await exerciseServices.deleteCategory(req.params.id)
        res.status(200).json({status: !!data});
    }catch (e) {
        next(Constants.errors.unAuthorized)
    }

}