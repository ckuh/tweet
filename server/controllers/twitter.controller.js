var model = require('../models/twitter.model.js');

exports.user = {
  get: userGet
}

function userGet(req, res) {
  console.log('inside twitter.controller.js user.get: ', req.query);
  model.user.get(req.query)
  .then(function(data) {
    res.status(200).json(data);
  })
  .catch(function(err) {
    console.log('err: ', err);
    res.status(400).send(err);
  })
}

exports.word = {
  get: wordGet
}

function wordGet(req, res) {
  console.log('inside twitter.controller.js word.get: ', req.query);
  model.word.get(req.query)
  .then(function(data) {
    res.status(200).json(data);
  })
  .catch(function(err) {
    console.log('err: ', err);
    res.status(400).send(err);
  })
}
