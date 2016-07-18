var express = require('express');
var bodyParse = require('body-parser');
var app = express();

app.use(bodyParse.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name');
  next();
});

app.set('port', process.env.port || 1337);

app.use(express.static('./client'));

app.listen(app.get('port'), function() {
  console.log('Express Server listening on port ', app.get('port'));
})
