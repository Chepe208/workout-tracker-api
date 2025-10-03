const express = require('express');
const router = express.Router();
const reportController = require('../../controllers/reports.controller');

router.get('/:id', reportController.getReportById);
router.get('/', reportController.getReports);
router.post('/', reportController.createReport);

module.exports = router;