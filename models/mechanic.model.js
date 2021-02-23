const mongoose = require('mongoose');

const Mechanic = mongoose.model(
	'Mechanic',
	new mongoose.Schema({
		Name: String,
	})
);

module.exports = Mechanic;
