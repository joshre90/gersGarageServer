const mongoose = require('mongoose');

const Service_Type = mongoose.model(
	'Service_Type',
	new mongoose.Schema({
		Name: String,
		Price: String,
	})
);

module.exports = Service_Type;
