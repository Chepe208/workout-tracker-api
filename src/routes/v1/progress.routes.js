const express = require('express');
const router = express.Router();
const progressController = require('../../controllers/progress.controller');

router.get('/:id', progressController.getProgressById);
router.get('/', progressController.getProgress);

module.exports = router;