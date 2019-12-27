const express = require('express');
const html = require('html');

const app = express();

var port = process.env.PORT || 8000;

app.use(express.static('/public'));
app.use(express.static('assets'));
app.set('view engine', 'html');
app.get('/', function(req, res) {
  res.sendFile('/Users/ronaldhirschauer/src/colors_project/color.html');
});

app.listen(port, function() {
  console.log('App is running on http://localhost:' + port);
});