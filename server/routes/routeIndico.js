var router = require('express').Router();
var controller = require('../controllers/indico.controller.js');

router.post('', controller.post);

module.exports = router;
