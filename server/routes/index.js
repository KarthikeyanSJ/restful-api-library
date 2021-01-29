var express = require('express');
var router = express.Router();
var controller = require('../../controllers/controller');

module.exports = function(app) {
	router.get('/', controller.index);
	router.get('/api/:id', controller.findOne);
	router.get('/api', controller.findAll);
	router.post('/api', controller.add);
	router.put('/api/:id', controller.update);
	router.delete('/api/:id', controller.delete);
	app.use(router);
};