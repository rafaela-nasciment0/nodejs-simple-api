var express = require('express');
var routes = require('./routes');

const app = express();

app.use(routes);

module.exports = app;