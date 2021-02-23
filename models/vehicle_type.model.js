const mongoose = require('mongoose');

const Vehicle_Type = mongoose.model(
	'Vehicle_Type',
	new mongoose.Schema({
		Name: String,
	})
);

module.exports = Vehicle_Type;
