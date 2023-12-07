const router = require('express').Router();
const rega = require('./rega.routes');

router.use('/', rega);

module.exports = router;
