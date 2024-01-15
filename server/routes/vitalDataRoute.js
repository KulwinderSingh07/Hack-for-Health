const express = require('express');
const router = express.Router();

//controllers imported
const {createVitalData, getLastMonthData, getLastThreeMonthData, getLastYearData} = require('../controllers/vitalDateController');

router.post('/create',createVitalData).get('/getLastMonthData',getLastMonthData).get("/getLastThreeMonthData",getLastThreeMonthData).get("/getLastYearData",getLastYearData);

module.exports = router;