const express = require('express');
const router = express.Router();
const userRoutes = require('./users.routes');
const exerciseRoutes = require('./exercises.routes');
const workoutsRoutes = require('./workouts.routes');





router.use('/users', userRoutes);
router.use('/exercises', exerciseRoutes);
router.use('/workouts', workoutsRoutes);






module.exports = router;