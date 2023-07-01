const express = require('express');
const router = express.Router();
const voterController = require('../controllers/voterController');

router.post('/voter', voterController.createVoter);
router.get('/voters', voterController.getAllVoters);

module.exports = router;