const express = require('express');
const router = express.Router();
const CandidateController = require('../controllers/candidateController');

router.get('/candidates', CandidateController.getAllCandidates);

module.exports = router;