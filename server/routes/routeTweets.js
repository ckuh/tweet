var router = require('express').Router();
var controller = require('../controllers/twitter.controller.js');

router.get('', controller.get);

module.exports = router;
