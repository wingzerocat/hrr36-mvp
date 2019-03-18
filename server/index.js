var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

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

