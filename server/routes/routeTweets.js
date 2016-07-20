var router = require('express').Router();
var controller = require('../controllers/twitter.controller.js');

router.get('/userName', controller.user.get);
router.get('/keyWord', controller.word.get);

module.exports = router;
