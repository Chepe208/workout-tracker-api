const express = require('express');
const router = express.Router();
const userRoutes = require('./users.routes');
const exerciseRoutes = require('./exercises.routes');






router.use('/users', userRoutes);
router.use('/exercises', exerciseRoutes);






module.exports = router;