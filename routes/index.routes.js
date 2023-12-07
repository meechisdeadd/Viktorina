const router = require('express').Router();
const rega = require('./rega.routes');
const categoriesRoute = require('./categories.route');

router.use('/', rega);
router.use('/categories', categoriesRoute);

module.exports = router;
