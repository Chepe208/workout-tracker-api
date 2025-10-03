const express = require('express');
const router = express.Router();
const userRoutes = require('./users.routes');
const exerciseRoutes = require('./exercises.routes');
const workoutsRoutes = require('./workouts.routes');
const workoutExercisesRoutes = require('./workoutExercises.routes');
const progressRoutes = require('./progress.routes');
const reportRoutes = require('./reports.routes'); 

router.use('/users', userRoutes);
router.use('/exercises', exerciseRoutes);
router.use('/workouts', workoutsRoutes);
router.use('/workoutsExercises', workoutExercisesRoutes);
router.use('/progress', progressRoutes);
router.use('/reports', reportRoutes); 

module.exports = router;