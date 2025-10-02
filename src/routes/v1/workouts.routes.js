const express = require('express');
const router = express.Router();
const workoutController = require('../../controllers/workouts.controller');

// Rutas principales
router.get('/:id', workoutController.getWorkoutById);
router.get('/', workoutController.getWorkouts);

module.exports = router;