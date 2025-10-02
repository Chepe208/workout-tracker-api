const express = require('express');
const router = express.Router();
const workoutExercisesController = require('../../controllers/workoutExercises.controller');

router.get('/:id', workoutExercisesController. getWorkoutExerciseById);
router.get('/', workoutExercisesController.getWorkoutsExercises);



module.exports = router;