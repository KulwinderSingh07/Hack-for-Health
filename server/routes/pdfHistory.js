const express = require('express');
const router = express.Router();

//controllers imported
const { createPdfHistory, getAllPdfHistory } = require('../controllers/pdfHistorycontroller');

router.post('/create',createPdfHistory).post('/fetchPdfHistory',getAllPdfHistory);

module.exports = router;