const mongoose = require('mongoose');

const Engine = mongoose.model(
	'Engine',
	new mongoose.Schema({
		name: String,
	})
);

module.exports = Engine;
