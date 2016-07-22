var model = require('../models/indico.model.js');

exports.sentiment = {
  post: sentiementPost
}

function sentiementPost(req, res) {
  console.log('inside indico.controller.js sentiement post: ');
  model.sentiment.post(req.body)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      console.log('err: ', err);
      res.status(400).send(err);
    })
}

exports.emotion = {
  post: emotionPost
}

function emotionPost(req, res) {
  console.log('inside indico.controller.js emotion post: ');
  model.emotion.post(req.body)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      console.log('err: ', err);
      res.status(400).send(err);
    })
}
