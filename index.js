var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.status(200).send('Hello World');
});

var port = process.env.PORT || 3000;

var server = app.listen(port);

