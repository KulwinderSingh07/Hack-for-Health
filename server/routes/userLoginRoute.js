const express = require('express');
const router = express.Router();

//controllers imported
const {loginUserFunction,signUpUserFunction} = require('../controllers/userLoginController');

router.post('/loginUser',loginUserFunction);
router.post('/signUpUser',signUpUserFunction);

module.exports = router;