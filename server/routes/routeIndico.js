var router = require('express').Router();
var controller = require('../controllers/indico.controller.js');

router.post('/sentiment', controller.sentiment.post);
router.post('/emotion', controller.emotion.post);

module.exports = router;
