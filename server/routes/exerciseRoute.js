const express = require('express');
const router = express.Router();

//controllers imported
const {fetchMyExercises,addSuggestedExercisesFromPdf,saveToMyList,markComplete,markNotComplete,removeFromList,checkIfAllComplete} = require('../controllers/exerciseController');

router.post('/fetchMyExercises',fetchMyExercises);
router.post('/addSuggestedExercisesFromPdf',addSuggestedExercisesFromPdf);
router.post('/saveToMyList',saveToMyList);
router.post('/markComplete',markComplete);
router.post('/markNotComplete',markNotComplete);
router.post('/removeFromList',removeFromList);
router.post('/checkIfAllComplete',checkIfAllComplete);

module.exports = router;