const express = require('express');
const { createSymtomsHistory, getPredictionHistory } = require('../controllers/predictionSymptoms');
const router = express.Router();

//controllers imported

router.post('/create',createSymtomsHistory).post("/getPredictionHistory",getPredictionHistory)

module.exports = router;