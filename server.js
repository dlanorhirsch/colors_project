import express, { static } from 'express';
import html from 'html';
import ejs from 'ejs';
import { urlencoded } from "body-parser";
import { join } from 'path';

const app = express();
app.set('view engine', 'ejs');
app.use(urlencoded({
  extended: true
  })
);

var port = process.env.PORT || 8000;

app.use(static("public"));

app.get('/', function(req, res) {
  res.sendFile(join(__dirname, "index.html"));
});

app.listen(port, function() {
  console.log('App is running on http://localhost:' + port);
});

// res.sendFile(path.join(__dirname, '../public', 'index1.html'));