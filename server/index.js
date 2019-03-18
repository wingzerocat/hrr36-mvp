var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/pokes', function (req, res) {
  console.log('hello');
  items.selectAll(function(err, data) {
    if(err) {
      console.log('done');
      res.sendStatus(500);
    } else {
      console.log('done no error');
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

