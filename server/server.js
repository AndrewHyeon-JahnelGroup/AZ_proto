var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var mailgun = require('mailgun-js')


app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../dist')));

app.post('/send', function(req, res) {

  var domain = 'sandbox5546b5f3d3a34870a17f8297d342df4e.mailgun.org';
  var mg = new mailgun({
    apiKey: 'key-fae1df8c26c72d94230ce16308430ae0',
    domain: domain
  });
  //Your sending email address
  var from_who = 'postmaster@sandbox5546b5f3d3a34870a17f8297d342df4e.mailgun.org';
  //data formatted form mailgun
  var mgdata = req.body;
  mgdata.sender = from_who
  mgdata.to = 'derek@azura.la, regina@azura.legal';
  mgdata.from = mgdata.name + ' <' + mgdata.from + '>'
  delete mgdata.name
  console.log(mgdata)
