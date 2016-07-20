var router = require('express').Router();
var controller = require('../controllers/twitter.controller.js');

router.get('/user', controller.user.get);
router.get('/word', controller.word.get);

module.exports = router;
