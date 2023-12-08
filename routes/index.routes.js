const router = require('express').Router();
const rega = require('./rega.routes');
const categoriesRoute = require('./categories.route');

const questionRoute = require('./question.route')

router.use('/', rega);
router.use('/categories', categoriesRoute);
router.use('/question', questionRoute)

module.exports = router;
