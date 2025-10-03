const express = require('express');
const router = express.Router();
const workoutController = require('../../controllers/workouts.controller');

// Rutas principales
router.get('/:id', workoutController.getWorkoutById);
router.get('/', workoutController.getWorkouts);
router.post('/', workoutController.createWorkout);
router.put('/:id', workoutController.updateWorkout);
router.patch('/:id', workoutController.partialUpdateWorkout); 
router.delete('/:id', workoutController.deleteWorkout);

module.exports = router;