const express = require('express');
const router = express.Router();
const sickAbsenceController = require('../controllers/sickAbsenceController');


router.get('/', sickAbsenceController.getAllSickAbsenceHours);
router.post('/', sickAbsenceController.addSickAbsenceHours);


module.exports = router;