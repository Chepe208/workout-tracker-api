const express = require('express');
const router = express.Router();
const workoutExercisesController = require('../../controllers/workoutExercises.controller');

router.get('/:id', workoutExercisesController. getWorkoutExerciseById);
router.get('/', workoutExercisesController.getWorkoutsExercises);
router.post('/', workoutExercisesController.CreateExerciseworkout);
router.put('/:id', workoutExercisesController.updateWorkoutExercise);
router.patch('/:id', workoutExercisesController.partialUpdateWorkoutExercise);
router.delete('/:id', workoutExercisesController.deleteWorkoutExercise);

module.exports = router;