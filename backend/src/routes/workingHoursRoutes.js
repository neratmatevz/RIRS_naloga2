const express = require('express');
const router = express.Router();
const workingHoursController = require('../controllers/workingHoursController');

router.get('/', workingHoursController.getAllHours);        
router.post('/', workingHoursController.addHours);        
router.get('/:id', workingHoursController.getHours);     
router.put('/:id', workingHoursController.updateHours);      
router.delete('/:id', workingHoursController.deleteHours);    

module.exports = router;