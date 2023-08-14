const express = require('express');
const router = express.Router();

router.use('/', require('./partyRoutes'));
router.use('/', require('./candidateRoutes'));
router.use('/', require('./voterRoutes'));

//rota de teste
router.get('/', (req, res) => {
    res.send('API OK');

});

module.exports = router;
