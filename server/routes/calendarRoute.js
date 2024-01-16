const express = require('express');
const router = express.Router();

//controllers imported
const {fetchCalendarDates,addCalendarDate,deleteCalendarDate} = require('../controllers/calendarController');

router.post('/fetchCalendarDates',fetchCalendarDates);
router.post('/addCalendarDate',addCalendarDate);
router.post('/deleteCalendarDate',deleteCalendarDate);

module.exports = router;