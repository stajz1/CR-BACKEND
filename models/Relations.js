let User = require('./User'),
    AssignedExercises = require('./AssignedExercises'),
    Exercises = require('./Exercises'),
    ExerciseCategory = require('./ExerciseCategory'),
    VitalSigns = require('./VitalSigns'),
    PatientWorkOut = require('./PatientWorkOut'),
    Diagnosis = require('./Diagnosis');

User.hasMany(VitalSigns)
VitalSigns.belongsTo(User)

User.hasMany(AssignedExercises)
AssignedExercises.belongsTo(User)

User.hasMany(Diagnosis)
Diagnosis.belongsTo(User)

User.hasMany(PatientWorkOut)
PatientWorkOut.belongsTo(User)

Exercises.hasMany(PatientWorkOut)
PatientWorkOut.belongsTo(Exercises)

ExerciseCategory.hasMany(Exercises)
Exercises.belongsTo(ExerciseCategory)

Exercises.hasMany(AssignedExercises)
AssignedExercises.belongsTo(Exercises)
