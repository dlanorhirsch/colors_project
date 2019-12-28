const express = require('express');
const html = require('html');
const ejs = require('ejs');
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
  })
);

var port = process.env.PORT || 8000;

app.use(express.static("public"));

app.get('/home', function(req, res) {
  res.send('home.html');
});

app.listen(3000, function() {
  console.log('App is running on http://localhost:' + port);
});