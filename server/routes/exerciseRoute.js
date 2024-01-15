const express = require('express');
const router = express.Router();

//controllers imported
const {fetchSuggestedExercises,addSuggestedExercisesFromPdf} = require('../controllers/exerciseController');

router.post('/fetchSuggestedExercises',fetchSuggestedExercises);
router.post('/addSuggestedExercisesFromPdf',addSuggestedExercisesFromPdf);

module.exports = router;