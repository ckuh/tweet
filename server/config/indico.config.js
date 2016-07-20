require('./keys.js');
var Indico = require('indico.io');

Indico.apiKey = process.env.INDICO_API_KEY;

module.exports = Indico;
