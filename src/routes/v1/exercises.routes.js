const express = require('express');
const router = express.Router();
const exerciseController = require('../../controllers/exercises.controller');

router.get('/:id', exerciseController.getExerciseById);
router.get('/', exerciseController.getExercises);
router.post('/', exerciseController.createExercise);

module.exports = router;