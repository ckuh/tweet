var express = require('express');
var bodyParse = require('body-parser');
var app = express();

//routes
var routeTweets = require('./routes/routeTweets.js');
var routeIndico = require('./routes/routeIndico.js');

app.use(bodyParse.json({limit: '50mb'}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name');
  next();
});

app.set('port', process.env.PORT || 1337);

app.use(express.static('./client'));
app.use('/api/tweets', routeTweets);
app.use('/api/indico', routeIndico);

app.listen(app.get('port'), function() {
  console.log('Express Server listening on port ', app.get('port'));
})
