const mongoose = require('mongoose');

const Make = mongoose.model(
	'Make',
	new mongoose.Schema({
		name: String,
	})
);

module.exports = Make;
