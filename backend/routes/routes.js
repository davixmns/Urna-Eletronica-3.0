const express = require('express');
const router = express.Router();

router.use('/parties', require('./partyRoutes'));
router.use('/candidates', require('./candidateRoutes'));

module.exports = router;
