var model = require('../models/twitter.model.js');

exports.get = function(req, res) {
  console.log('inside twitter.controller.js get: ', req.query);
  model.get(req.query)
    .then(function(data) {
      res.status(200).send(data);
    })
    .catch(function(err) {
      console.log('err: ', err);
      res.status(400).send(err);
    })
}
