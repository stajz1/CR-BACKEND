const Router = require("express").Router();

const { exercisesList, exerciseCategory, exercise, storeCategory, storeExercise, assignExercise, fetchAssignedExercise } = require('../controllers/exercise.controller')
const { ImageUpload } = require('./../helpers/multer');

Router.get('/category', exerciseCategory)
Router.get('/category/:categoryId', exercisesList)
Router.get('/:exerciseId', exercise)

Router.post('/storeCategory', ImageUpload.single('categoryImage'), storeCategory);
Router.post('/storeExercise', ImageUpload.fields([{
    name: 'image1', maxCount: 1
}, {
    name: 'image2', maxCount: 1
}]), storeExercise);

Router.post('/assignExercise', assignExercise);

Router.get('/fetchAssignedExercise/:id', fetchAssignedExercise)

Router.get('')

module.exports = Router;

