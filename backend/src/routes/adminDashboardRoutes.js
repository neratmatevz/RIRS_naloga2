const express = require('express');
const router = express.Router();
const adminDashboardController = require('../controllers/adminDashboardController');

router.get('/workHours', adminDashboardController.getAllWorkingHours);        
    

module.exports = router;