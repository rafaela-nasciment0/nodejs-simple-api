var express = require('express');

const routes = express.Router();

routes.get('/', function(req, res) {
	res.status(200).send('Hello World');
});

routes.post('/', function(req, res) {
	res.status(200).send('Endpoint POST');
});

routes.delete('/:id', function(req, res) {
	res.status(200).send(`Endpoint DELETE ${req.params.id}`);
});

routes.patch('/:id', function(req, res) {
	res.status(200).send(`Endpoint Patch ${req.params.id}`);
});

module.exports = routes;