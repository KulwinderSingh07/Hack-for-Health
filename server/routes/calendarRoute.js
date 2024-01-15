const express = require('express');
const router = express.Router();

//controllers imported
const {fetchCalendarDates} = require('../controllers/calendarController');

router.post('/fetchCalendarDates',fetchCalendarDates);

module.exports = router;