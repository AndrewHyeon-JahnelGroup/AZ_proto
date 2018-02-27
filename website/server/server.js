var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var mailgun = require('mailgun-js')
var mg_key = require('./config.js')

app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../dist')));

app.post('/send', function(req, res) {

  //mailgun apik
  var mgKey = mg_key.mg_key || process.eng.mg_key;
  console.log(mgKey)
  var domain = 'sandboxc4b09ff7bf6d49738e53add90ddb43a0.mailgun.org';
  var mg = new mailgun({
    apiKey: mgKey,
    domain: domain
  });
  //Your sending email address
  var from_who = 'postmaster@sandboxc4b09ff7bf6d49738e53add90ddb43a0.mailgun.org';
  //data formatted form mailgun
  var mgdata = req.body;
  mgdata.sender = from_who
  mgdata.to = '';
  mgdata.from = mgdata.name + ' <' + mgdata.from + ', ' + mgdata.number + '>'
  delete mgdata.name
  console.log(mgdata)

  mg.messages().send(mgdata, function(error, body) {
    console.log(body)
  })
})

var PORT = process.env.PORT || 4000;

app.listen(PORT);
console.log('server started '+ PORT);
module.exports = app;
