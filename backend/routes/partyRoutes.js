const express = require('express');
const router = express.Router();
const PartyController = require('../controllers/partyController');

router.get('/parties', PartyController.getAllParties);

module.exports = router;