var model = require('../models/indico.model.js');

exports.post = function(req, res) {
  console.log('inside indico.controller.js post: ');
  model.post(req.body)
    .then(function(data) {
      res.status(200).send(data);
    })
    .catch(function(err) {
      console.log('err: ', err);
      res.status(400).send(err);
    })
}
